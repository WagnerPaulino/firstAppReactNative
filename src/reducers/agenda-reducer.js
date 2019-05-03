import {
    GET_AGENDA, ADD_AGENDA, UPDATE_AGENDA, DELETE_AGENDA, SET_ORDENACAO, SET_PESQUISA, SET_AGENDA
} from '../actions/types';

export default (state = {}, action) => {
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
            for (let index = action.data.length - 1; index >= 0; index--) {
                console.log(index);
                if (action.data[index].id === action.id) {
                    action.data.splice(index, 1);
                }
            }
            return {
                ...state,
                agenda: action.data
            }
        case SET_AGENDA:
            return {
                ...state,
                agenda: action.agenda
            }
        default:
            return state || '';
    }
}