export const addPlayer = (player, teamId) =>{
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/teams/${teamId}/players`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(player)
        })
        .then(response => response.json())
        .then(team => dispatch({type: 'ADD_PLAYER', payload: team}))
    }
}