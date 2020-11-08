export const addTeam= (data) => {
   // debugger;


    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/teams', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(team => dispatch({type: 'ADD_TEAM', payload: team}))
    }
}

