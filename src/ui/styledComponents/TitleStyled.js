import styled from 'styled-components';
import {
  shadowText,
  titleColor,
  titleShadowColor,
} from '../helpers/styleFunctions';

export const TitleS = styled.h2`
  color: ${titleColor};
  ${(props) => shadowText(props)(titleShadowColor(props))}
  margin-bottom: 1rem;
`;

export const BigNameS = styled.span`
  color: ${(props) => props.theme.bigName};
  ${(props) => shadowText(props)(props.theme.bigNameShadow)}
  white-space: nowrap;
`;
