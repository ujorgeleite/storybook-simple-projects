import styled from "styled-components";

export interface TitleProps {
  primary?: boolean,
  fontColor?: string,
  fontSize?: string,
  fontWeight?: string
  margin: string,
  padding: string
}

export const Title = styled.h1<TitleProps>`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => !!props.fontColor ? props.fontColor : props.primary ? 'white"' : 'palevioletred'};
  font-size: ${props =>!!props.fontSize ? props.fontSize: '1rem'  };
  font-weight: ${props =>!!props.fontWeight ? props.fontWeight: 100 };
  font-family: 'Courier New';
  margin: ${props => !props.margin ? props.margin : ''};
  padding: ${props => !props.padding ? props.padding : ''};
`;


