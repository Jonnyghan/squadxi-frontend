import React from 'react'
import {connect} from 'react-redux'
import {addTeam} from '../actions/addTeam'

class TeamInput extends React.Component {
state = {
    name: '', 
    league: ''
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
handleSubmit = (event) =>{
    event.preventDefault()
    this.props.addTeam(this.state)
}

    render(){
        return(
            <div>
                Team Registration Form<br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Team Name:</label>
                    <input type='text'placeholder='Name' value={this.state.name} name= 'name' onChange={this.handleChange}/> <br/><br/>
                    <label>Team League:</label>
                    <input type='text'placeholder='League' value={this.state.league} name= 'league' onChange={this.handleChange}/><br/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTeam}) (TeamInput)