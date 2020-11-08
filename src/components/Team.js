import React from 'react'
//import {Redirect} from 'react-router-dom'
import PlayersContainer from '../containers/PlayersContainer'

const Team = (props) =>{

 
    let team = props.teams.filter( team => team.id == props.match.params.id)[0]
    
return (
    <div>
        
        <h1>{team ? team.name: null} </h1><br/> 
       <h3> League: </h3>{team ? team.league: null} <br/> 
        <h3>Players Registered:</h3>{team ? team.players.length: null}
        
        <PlayersContainer team={team}/>
    </div>
)

} 
export default Team