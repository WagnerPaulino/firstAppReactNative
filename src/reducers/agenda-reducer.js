import {
    GET_AGENDA, ADD_CLIENTE, UPDATE_CLIENTE, DELETE_CLIENTE, SET_ORDENACAO, SET_PESQUISA, SET_CLIENTE
} from '../actions/types';

export default (state = {ordenacao: "a-z"}, action) => {
    //return state[action.type] || '';
    switch(action.type) {
        case GET_AGENDA:
            return {
                ...state,
                agenda: action.data
            }
        case ADD_CLIENTE:
            return {
                ...state,
                agenda: state.agenda.concat(action.cliente)
            }
        case UPDATE_CLIENTE:
            return {
                ...state,
                cliente: null,
                agenda: state.agenda.map((cliente) => (cliente.id === action.id) ? action.cliente : cliente)
            }
        case DELETE_CLIENTE:
            let agenda = state.agenda;
            agenda = agenda.filter((cliente) => cliente.id !== action.id);
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
        case SET_CLIENTE:
            return {
                ...state,
                cliente: action.cliente
            }
        default:
            return state || '';
    }
}