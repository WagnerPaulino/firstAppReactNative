import {
    GET_CLIENTES, ADD_CLIENTE, UPDATE_CLIENTE, DELETE_CLIENTE, SET_ORDENACAO, SET_PESQUISA, SET_CLIENTE
} from './types';

const generateId = () => {
    return Math.floor(Math.random() * 10000 + 10000);
}

const salvarCliente = (cliente) => {
    const id = generateId();
    return {...cliente, id}
}

const data = [
    { id: 1, nome: 'Joao', cpf: 1343166, telefone: 131330, email: 'fdsafdsa' },
    { id: 2, nome: 'fdsa', cpf: 161361, telefone: 6478965, email: 'fdqterds'}
]

export const getClientes = () => ({ type: GET_CLIENTES, data });
export const addCliente = (cliente) => ({ type: ADD_CLIENTE, cliente: salvarCliente(cliente) });
export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE, cliente: {id, ...cliente} });
export const deleteCliente = (id) => ({ type: DELETE_CLIENTE, id });
export const setOrdenacao = (ev) => ({type: SET_ORDENACAO, ordenacao: ev.target.value});
export const setPesquisa = (ev) => ({type: SET_PESQUISA, pesquisa: ev.target.value});
export const setCliente = (cliente) => ({type: SET_CLIENTE, cliente});