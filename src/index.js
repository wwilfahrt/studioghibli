import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5A7285',
    },
    secondary: {
      main: '#60B5C2',
    },
    error: {
      main: '#f67b50',
    },
    info: {
      main: '#B97B77',
    },
  },
  typography: {
    fontFamily: 'Raleway',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
