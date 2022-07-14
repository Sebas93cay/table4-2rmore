import styled from 'styled-components';
import { shadowsMeasures } from '../helpers/measures';

export const HeaderS = styled.header`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.header};
  padding: 5px 30px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    `${shadowsMeasures.shadowBoxPosition} ${props.theme.headerShadow}`};
  position: relative;
  /* z-index: 2; */
`;
