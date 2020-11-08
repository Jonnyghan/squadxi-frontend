import React from 'react'
import{connect} from 'react-redux'
import { addPlayer } from '../actions/addPlayer'

class PlayerInput extends React.Component {

    state={
        name:'',
        age: '',
        position: 'St'
    }
    
    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit= (event) => {
        
        event.preventDefault()
        this.props.addPlayer(this.state, this.props.team.id)
        this.setState({
            name:'',
            age: '',
            position: 'St'
        })
    }

    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Name:</label>
                   <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Age:</label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange}/><br/>
                   <label>Position:</label>
                   <select name="position" value={this.state.position} onChange={this.handleChange}>
                       <option>St</option>
                       <option>Wm</option>
                       <option>Cm</option>
                       <option>Fb</option>
                       <option>Cb</option>
                       <option>Gk</option>
                   </select><br/>
                <input type="submit"/>
               </form>
            </div>
        )
    }

}

export default connect(null, {addPlayer}) (PlayerInput)