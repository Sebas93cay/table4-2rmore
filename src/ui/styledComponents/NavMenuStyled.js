import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headerHovers } from '../helpers/styleFunctions';

export const NavMenuS = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const NavItemS = styled.li`
  color: ${(props) => props.theme.fontColor};
  padding: 5px 10px;
  margin-inline: 5px;
  ${headerHovers}
`;

export const LinkS = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
`;
