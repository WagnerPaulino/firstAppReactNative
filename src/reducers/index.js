import { combineReducers } from 'redux';
import agendaReducer from './main-reducer';


const allReducers = combineReducers({
  agenda: agendaReducer,
});
export default allReducers;