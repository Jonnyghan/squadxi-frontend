export const deletePlayer = (teamId,playerId) =>{

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/teams/${teamId}/players/${playerId}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then( team =>  dispatch({type:'DELETE_PLAYER',payload: team}))

    }
}