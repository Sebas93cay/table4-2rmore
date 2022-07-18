import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';

export const PageS = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 820px;
  padding: 15px 25px;
  @media (${mediaQueries.desktop}) {
    padding-inline: 0;
  }
`;
