import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Agenda from './pages/agenda';
import EditAgenda from './pages/edit-agenda';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(allReducers);

const Routes = () => (
   <Provider store={store}>
      <Router>
         <Scene key="root">
            <Scene key="agenda" component={Agenda} title="Tarefas" initial={true} />
            <Scene key="editAgenda" component={EditAgenda} title="Salvar/Editar Tarefas" />
         </Scene>
      </Router>
   </Provider>
)
export default Routes