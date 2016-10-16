import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';

import { grey100, grey300, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// MuiTheme Colors
export const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#607D8B',
    primary2Color: '#455A64',
    primary3Color: '#90A4AE',
    accent1Color: '#F50057',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: '#607D8B',
    shadowColor: fullBlack,
  },
});

const store = createStore(reducers);
const Theme = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

render(
  <Provider store={ store }>
    <Theme />
  </Provider>
  , document.querySelector('.container'));
