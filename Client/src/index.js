import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
const defaultTheme = createTheme();
root.render(
  <React.StrictMode>
   <Emotion10ThemeProvider theme={defaultTheme}>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <ChakraProvider>
          <App />
        </ChakraProvider>

      </BrowserRouter>
    </ThemeProvider>
    </Emotion10ThemeProvider>
  </React.StrictMode>
);


