import React from 'react'
//import Team from './Team'
import{Link} from 'react-router-dom'

const Teams = (props) => {
   
    props.teams.map( team => team.count = 0)


 

    const handleClick = (team) => {
            document.getElementById(`${team.id}`).innerHTML = team.count += 1
            }
    
 
   
  
   return(
       <div>
        <h1>Registered teams:</h1>
            {props.teams && props.teams.map( team => 
                
            <li key={team.id}>
                
                <b><Link to={`/teams/${team.id}`}>{team.name}</Link></b> <br/>
                Team Likes: <button id ={team.id} onClick={() => handleClick(team)}>{team.count}</button> <br/>
                </li> )}
        </div>

                
    )
}


export default Teams