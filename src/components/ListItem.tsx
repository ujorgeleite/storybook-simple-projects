import styled from "styled-components";

export interface LisItemProps {
  backgroundColor?: string;
  color?: string;
  src?: string;
  title?: string;
  darkMode?: boolean;
  onClick?: () => void;
}

export const ListItem = styled.div<LisItemProps>`
  background: ${props => props.backgroundColor};
  color: ${props => props.darkMode ? "white" : "black"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;