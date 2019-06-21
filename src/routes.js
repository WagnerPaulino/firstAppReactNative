import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Main from './pages/main';
import Edit from './pages/edit';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(allReducers);

const Routes = () => (
   <Provider store={store}>
      <Router>
         <Scene key="root">
            <Scene key="agenda" component={Main} title="Tarefas" initial={true} />
            <Scene key="edit" component={Edit} title="Salvar/Editar Tarefas" />
         </Scene>
      </Router>
   </Provider>
)
export default Routes