import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import store from './Redux/store';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
const defaultTheme = createTheme();
 
   
    const theme= extendTheme({
 
      styles: {
        global:(props) => ({
          body: {
            bg: props.colorMode === 'dark' ? '#2C2C2C' : 'var(--landing-page, #FFF)',
 
            
          },
        }),
      },
    });
  
 
root.render(
  <React.StrictMode>

  <Provider store={store}>
   <Emotion10ThemeProvider theme={defaultTheme}>
    <ThemeProvider theme={defaultTheme}>
    <ToastContainer/>
      <BrowserRouter>

        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>

      </BrowserRouter>
    </ThemeProvider>
    </Emotion10ThemeProvider>
    </Provider>
  </React.StrictMode>
);


