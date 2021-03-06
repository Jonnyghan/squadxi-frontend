import React from 'react'
import PlayerInput from '../components/PlayerInput'
import Players from '../components/Players'

class PlayersContainer extends React.Component {

    render(){
        return(
            <div>
                <PlayerInput team={this.props.team}/>
                <Players players={this.props.team && this.props.team.players}/>
            </div>
        )
    }
}

export default PlayersContainer