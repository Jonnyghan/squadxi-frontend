

export default function teamReducer(state = {teams: []}, action ){
// /debugger;
    switch(action.type) {
        case 'FETCH_TEAMS':
            return{teams: action.payload}
        case 'ADD_TEAM':
            return {...state, teams: [...state.teams, action.payload]}
         default:
            return state
    }


}
