import React  from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './Pages/Details/index.jsx'
import { SignIn } from './Pages/SignIn/index.jsx'
import {Register} from "./Pages/Register"
import { ShowProduct } from './Pages/ShowProduct/index.jsx'
import { Profile } from './Pages/Profile/index.jsx'
import {Carrinho} from "./Pages/Carrinho"
import { User } from './Pages/User/index.jsx'
import { ThemeProvider } from 'styled-components'
import theme from "./Styles/theme.js"
import Globalstyles from './Styles/global.js'
import { Security } from './Pages/Security/index.jsx'
import {Privacy} from "./Pages/Privacy"
import { History } from './Pages/History/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles/>
      < History />
    </ThemeProvider>
  </React.StrictMode>,
)
