import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { iconsSize } from '../headerConstants';

const buttonSize = iconsSize;

export const NavButton = styled(GiHamburgerMenu)`
  height: ${buttonSize};
  width: ${buttonSize};
  color: ${(props) => props.theme.fontColor};
`;
