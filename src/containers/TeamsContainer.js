import React from 'react'
import Teams from '../components/Teams'
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
                <TeamInput/>
                <Teams teams={this.props.teams}/>
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
