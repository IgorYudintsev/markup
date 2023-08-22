import styled, {css} from "styled-components";

interface ButtonProps {
    background?: string;
    color?: string;
    superStyles?: boolean
    //style?: CSSProperties;
    // Добавьте остальные ожидаемые свойства с типами
}


export const Button = styled.button<ButtonProps>`
  background: ${props => props.background || 'red'};
  color: ${props => props.color || 'black'};
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  ${props => props.superStyles && css<ButtonProps>`
    background: green;
    color: chartreuse;
  `

  }
  &:hover {
    filter: brightness(0.85);
  }
`