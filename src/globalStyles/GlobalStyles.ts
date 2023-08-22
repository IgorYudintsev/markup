import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled";

export const GlobalStyles=createGlobalStyle`
  body {
    //background-color: #1c2a2a;
    background-color: ${theme.colors.secondary};
  }
`