import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from './helpers/moone/theme.tsx'
import { ThemeProvider } from '@emotion/react'
import './i18n/config/index.tsx'
import { Provider } from 'react-redux'
import { Store } from './redux_toolkit/store/store/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </ChakraProvider>
      </ColorModeProvider>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
