import {
    GET_AGENDAS
} from './types';

// const generateId = () => {
//     return Math.floor(Math.random() * 10000 + 10000);
// }

// const salvarCliente = (cliente) => {
//     const id = generateId();
//     return {...cliente, id}
// }

const data = [
    { id: 1, nome: 'Ir ao banheiro', horario: 'a cada 2h' },
    { id: 2, nome: 'Almoçar', horario: '12h30'}
]

export const getAgendas = () => ({ type: GET_AGENDAS, data });
// export const addCliente = (cliente) => ({ type: ADD_CLIENTE, cliente: salvarCliente(cliente) });
// export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE, cliente: {id, ...cliente} });
// export const deleteCliente = (id) => ({ type: DELETE_CLIENTE, id });
// export const setOrdenacao = (ev) => ({type: SET_ORDENACAO, ordenacao: ev.target.value});
// export const setPesquisa = (ev) => ({type: SET_PESQUISA, pesquisa: ev.target.value});
// export const setCliente = (cliente) => ({type: SET_CLIENTE, cliente});