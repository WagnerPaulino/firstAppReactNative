import {
    GET_AGENDA, ADD_AGENDA, UPDATE_AGENDA, DELETE_AGENDA, SET_ORDENACAO, SET_PESQUISA, SET_AGENDA
} from '../actions/types';

export default (state = {ordenacao: "a-z"}, action) => {
    //return state[action.type] || '';
    switch(action.type) {
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
                agenda: null,
                agenda: state.agenda.map((agenda) => (agenda.id === action.id) ? action.agenda : agenda)
            }
        case DELETE_AGENDA:
            let agenda = state.agenda;
            agenda = agenda.filter((agenda) => agenda.id !== agenda.id);
            return {
                ...state,
                agenda: agenda
            }
        case SET_ORDENACAO:
            return {
                ...state,
                ordenacao: action.ordenacao
            }
        case SET_PESQUISA:
            return {
                ...state,
                pesquisa: action.pesquisa
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