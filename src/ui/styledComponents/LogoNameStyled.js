import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';
import { headerHovers } from '../helpers/styleFunctions';

export const LogoNameS = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.logo};
  font-weight: 900;
  font-size: 1.3rem;
  padding: 5px;
  text-align: center;
  margin-inline: 10px;
  ${headerHovers};
  @media (${mediaQueries.tablet}) {
    order: 1;
  }
`;
