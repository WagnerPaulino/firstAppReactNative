import {
    GET_AGENDAS, DELETE_AGENDA, ADD_AGENDA
} from './types';

const generateId = () => {
    return Math.floor(Math.random() * 10000 + 10000);
}

const salvarAgenda = (agenda) => {
    const id = generateId();
    return {...agenda, id}
}

var data = [
    { id: 1, nome: 'Ir ao banheiro', horario: 'a cada 2h' },
    { id: 2, nome: 'Almoçar', horario: '12h30' },
    { id: 3, nome: 'Jantar', horario: '18h30' }
]

export const getAgendas = () => ({ type: GET_AGENDAS, data });
export const addAgenda = (agenda) => ({ type: ADD_AGENDA, agenda: salvarAgenda(agenda) });
// export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE, cliente: {id, ...cliente} });
export const deleteAgenda = (id) => ({ type: DELETE_AGENDA, id, data });
// export const setOrdenacao = (ev) => ({type: SET_ORDENACAO, ordenacao: ev.target.value});
// export const setPesquisa = (ev) => ({type: SET_PESQUISA, pesquisa: ev.target.value});
// export const setCliente = (cliente) => ({type: SET_CLIENTE, cliente});