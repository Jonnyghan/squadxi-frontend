

export default function teamReducer(state = {teams: []}, action ){

    switch(action.type) {
        case 'FETCH_TEAMS':
            return{teams: action.payload}
            default:
                return state
    }


}
