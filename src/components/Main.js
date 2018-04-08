/*
* Title: Simple react app to act as landing page when patient needs to view
* sick note submitted onto the ethereum network
* Version: v00_01
* Author: Nzwisisa Chidembo <nzwisisa@gmail.com>
*/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sicknote from '../components/Sicknote';

const Main = () => (
  <main>
    <Switch>
      <Route path='/sicknote/:number' component={Sicknote}/>
    </Switch>
  </main>
);

export default Main;
