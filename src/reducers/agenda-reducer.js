import {
    GET_AGENDA, ADD_AGENDA, UPDATE_AGENDA, DELETE_AGENDA, SET_ORDENACAO, SET_PESQUISA, SET_AGENDA
} from '../actions/types';

export default (state = { agenda: [] }, action) => {
    //return state[action.type] || '';
    switch (action.type) {
        case GET_AGENDA:
            return {
                ...state,
                agenda: action.data
            }
        case ADD_AGENDA:
            return {
                ...state,
                agenda: state.agenda.concat(action.agenda)
            }
        case UPDATE_AGENDA:
            return {
                ...state,
                agenda: state.agenda.map((agenda) => (agenda.id === action.id) ? action.agenda : agenda)
            }
        case DELETE_AGENDA:
            // state.agenda = action.data;
            for (let index = state.agenda.length - 1; index >= 0; index--) {
                if (state.agenda[index].id === action.id) {
                    state.agenda.splice(index, 1);
                }
            }
            console.log(state);
            console.log('redux')
            return {
                ...state,
                agenda: state.agenda
            }
        case SET_AGENDA:
            return {
                ...state,
                agenda: action.agenda
            }
        default:
        console.log('default');
            return state || '';
    }
}