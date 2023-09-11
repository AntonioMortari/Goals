import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// theme
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'

// global style
import GlobalStyle from './styles/global'

// redux
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>

    </ThemeProvider>
  
)
