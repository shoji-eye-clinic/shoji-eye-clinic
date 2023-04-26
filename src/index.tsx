import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createTheme } from '@material-ui/core';
import cyan from '@material-ui/core/colors/cyan';
import amber from '@material-ui/core/colors/amber';

const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: amber,
  },
});
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
