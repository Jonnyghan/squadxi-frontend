import React from 'react'
import {connect} from 'react-redux'
import {deletePlayer} from '../actions/deletePlayer'



const Players = (props) =>{

    const handleDelete= (player) =>{
        //debugger;
       props.deletePlayer(player.team_id,player.id)
    }
    return(
        <div>
            <h3>Current Squad List:</h3>
            Position Key: <br/>
            ST = Striker <br/>
            WM = Wide Midfielder<br/>
            CM = Center Midfielder<br/>
            FB = Fullback<br/>
            CB = Centerback<br/>
            GK = Goalkeeper<br/><br/>
        
            {props.players && props.players.map(player =>
            
                <div id={player.id}>
                   <b> Name:</b> {player.name} ({player.age} yrs old)<br/>
                  <b> Position:</b> {player.position.toUpperCase()}<br/><br/>
                  <button onClick={() => handleDelete(player)}>Delete</button><br/><br/>
                </div> 
                )}
        </div>
    )
}

export default connect(null,{deletePlayer}) (Players) 
