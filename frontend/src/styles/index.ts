import { createGlobalStyle } from 'styled-components'

import variables from './variables'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Inter", sans-serif;
    background-color: ${variables.black};
    color: ${variables.white};
  }
`
export default GlobalStyle
