import React from 'react'

const Teams = (props) => {

    return(
        <div>
            {props.teams.map( team => <li key={team.id}>{team.name}<ul>League: {team.league}</ul><ul>{team.players.length} players registered</ul></li> )}
        </div>
    )
}

export default Teams