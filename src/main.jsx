import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }
  body{
    background: #000;
  }
  input{
    font-family: 'Roboto', sans-serif;
  } 
  button{
    font-family: 'Roboto', sans-serif;
  } 
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
