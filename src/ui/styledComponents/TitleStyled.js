import styled from 'styled-components';
import {
  shadowColor,
  titleColor,
  titleShadowColor,
} from '../helpers/styleFunctions';

export const TitleS = styled.h2`
  color: ${titleColor};
  ${(props) => shadowColor(props)(titleShadowColor(props))}
`;

export const BigNameS = styled.span`
  color: ${(props) => props.theme.bigName};
  ${(props) => shadowColor(props)(props.theme.bigNameShadow)}
`;
