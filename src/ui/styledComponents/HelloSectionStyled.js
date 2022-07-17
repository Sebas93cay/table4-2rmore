import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';

export const HelloSectionS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 50px;
  @media (${mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: 400px 1fr;
  }
`;

export const HiMessages = styled.div`
  margin-bottom: 50px;
`;
