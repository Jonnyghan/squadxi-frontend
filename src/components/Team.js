import React from 'react'
import {Redirect} from 'react-router-dom'
import PlayersContainer from '../containers/PlayersContainer'

const Team = (props) =>{

    let team = props.teams[props.match.params.id -1]
   // {team ? null : <Redirect to='/teams'/>}
    
return (
    <div>
        
        <h1>{team ? team.name: "NO TEAM REGISTERED ON THIS PAGE"} </h1><br/> 
       <h3> League: </h3>{team ? team.league: null} <br/> 
        <h3>Players Registered:</h3>{team ? team.players.length: null}
        <PlayersContainer team={team}/>
    </div>
)

} 
export default Team