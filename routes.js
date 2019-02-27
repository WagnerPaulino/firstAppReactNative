import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Agenda from './pages/agenda';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "agenda" component = {Agenda} title = "Agenda" initial = {true} />
      </Scene>
   </Router>
)
export default Routes