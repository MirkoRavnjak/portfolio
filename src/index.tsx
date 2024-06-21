import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import reportWebVitals from './reportWebVitals';
import ModeToggle from './components/mode-toggle/ModeToggle';
const theme = extendTheme({ cssVarPrefix: 'portfolio' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssVarsProvider>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();