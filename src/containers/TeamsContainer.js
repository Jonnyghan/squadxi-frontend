import React from 'react'
import Teams from '../components/Teams'
import Team from '../components/Team'
import {Route, Switch} from 'react-router-dom'
import TeamInput from '../components/TeamInput'
import {connect} from 'react-redux'
import {fetchTeams} from '../actions/fetchTeams'

class TeamsContainer extends React.Component{

    componentDidMount() {
       this.props.fetchTeams()
    }

    render(){

        return(
            <div>
                <Switch>
                    <Route exact path='/teams/new' component={TeamInput}/>
                    <Route exact path='/teams/:id' render={(routerProps) => <Team {...routerProps} teams={this.props.teams}/>}/>        
                    <Route exact path='/teams' render={(routerProps) => <Teams {...routerProps} teams={this.props.teams}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps= state => {
    return {
       teams: state.teams

    }

}
 
export default connect(mapStateToProps, {fetchTeams}) (TeamsContainer)  
