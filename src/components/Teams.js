import React from 'react'
//import Team from './Team'
import{Link} from 'react-router-dom'

const Teams = (props) => {
   
    return(
        <div>
        <h1>Registered teams:</h1>
            {props.teams.map( team => 
            <li key={team.id}>
                <b><Link to={`/teams/${team.id}`}>{team.name}</Link></b>
                </li> )}
        </div>
    )
}

export default Teams