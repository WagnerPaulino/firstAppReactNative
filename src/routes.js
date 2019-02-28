import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Agenda from './pages/agenda';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const store = createStore(allReducers);

const Routes = () => (
   <Provider store={store}>
      <Router>
         <Scene key="root">
            <Scene key="agenda" component={Agenda} title="Agenda" initial={true} />
         </Scene>
      </Router>
   </Provider>
)
export default Routes