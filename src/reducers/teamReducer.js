

export default function teamReducer(state = {teams: []}, action ){
        
    switch(action.type) {
        case 'FETCH_TEAMS':
            return{teams: action.payload}
        case 'ADD_TEAM':
            return {...state, teams: [...state.teams, action.payload]}
         case 'ADD_PLAYER':
             
             let teams = state.teams.map(team => {
                if (team.id === action.payload.id) {
                    return action.payload
                } else{
                    return team
                }
            })
            return{...state, teams: teams}
         default:
            return state
    }


}
