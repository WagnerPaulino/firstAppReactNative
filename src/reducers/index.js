import { combineReducers } from 'redux';
import agendaReducer from './agenda-reducer';


const allReducers = combineReducers({
  agenda: agendaReducer,
});
export default allReducers;