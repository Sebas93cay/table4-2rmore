import styled from 'styled-components';
import { dropDownMenuTransition } from '../helpers/styleFunctions';

export const ShadowLayer = styled.div`
  ${() => dropDownMenuTransition}
  position: fixed;
  height: 400vh;
  width: 100vw;
  top: -400vh;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.shadowLayer},
    ${(props) => props.theme.shadowLayerTransparent}
  );
  z-index: 1;
  ${(props) => (props.active ? `top: 0;` : '')}//
`;
