import React from 'react';
import styled from "styled-components";
import {NavLink} from './Basics.styled';
import {animationButton} from "./../animations/Animation.styled";

export const Basics = () => {
    return (
        <>
            <NavLink>
                <ul>
                    <li><a href="">link1</a></li>
                    <li><a href="">link2</a></li>
                    <li><a href="">link3</a></li>
                </ul>
            </NavLink>
            <ButtonWrapper>
                <Button>Button1</Button>
                <Button2>Button2</Button2>
                <Button3>Button3</Button3>
                <Button2 as={"a"}>Link</Button2>
                <CrazyButton>CrazyButton</CrazyButton>
                <LastChildButton>LastChildButton</LastChildButton>
            </ButtonWrapper>
        </>

    );
};

// const NavLink = styled.ul`
//   ul {
//     list-style: none;
//   },
//
//   & > ul > li > a {
//     color: royalblue;
//   text-decoration: none;
//   },
//
//   li+li{
//     font-size: 30px; //если перед тобой стоял li
//   }
// `

const Button = styled.button`
  background: red;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  &:hover {
    filter: brightness(0.85);
  }
`

const CrazyButton=styled(Button)`
  &:hover {
    animation: ${animationButton} 1s ease-out;
  }
`


const Button2 = styled(Button)`
  background: royalblue;

  &:hover {
    filter: brightness(0.85);
  }
`
const Button3 = styled(Button)`
  &:hover {
    filter: brightness(0.85);
  }
`
const LastChildButton = styled(Button2)`
  text-align: center;

`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & :last-child {
    background-color: chartreuse;
  }
;

  button {
    cursor: pointer;
  }
;

  ${Button3} {
    background-color: #282c34;
    color: white;
  }
  
  @media screen and (max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


`



