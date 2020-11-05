
export function fetchTeams( action){
   
    return (dispatch) =>{
   fetch('http://localhost:3000/api/v1/teams')
   .then(resp => resp.json())
    .then(teams => dispatch({
        type: 'FETCH_TEAMS',
        payload: teams
    }))
    }
}