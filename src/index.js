/*
* Title: Simple react app to act as landing page when patient needs to view
* sick note submitted onto the ethereum network
* Version: v00_01
* Author: Nzwisisa Chidembo <nzwisisa@gmail.com>
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render((
  <MuiThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
