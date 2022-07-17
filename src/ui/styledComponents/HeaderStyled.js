import styled from 'styled-components';
import { shadowsMeasures } from '../helpers/themes';

export const HeaderS = styled.header`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.header};
  padding: 5px 30px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    `${props.theme.shadowBoxPosition} ${props.theme.headerShadow}`};
  position: relative;
  /* z-index: 2; */
`;
