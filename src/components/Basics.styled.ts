import styled from "styled-components";

export const NavLink = styled.ul`
  ul {
    list-style: none;
  },

  & > ul > li > a {
    color: royalblue;
  text-decoration: none;
  },
  
  li+li{
    font-size: 30px; //если перед тобой стоял li
  }
`