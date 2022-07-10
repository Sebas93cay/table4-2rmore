import styled from 'styled-components';
import { BsFillCloudMoonFill, BsFillSunFill } from 'react-icons/bs';
import { iconsSize } from '../headerConstants';

const iconStyle = (props) => `
  color: ${props.theme.fontColor};
  width: ${iconsSize};
  height: ${iconsSize};
  cursor: pointer;
`;

export const MoonIcon = styled(BsFillCloudMoonFill)`
  ${(props) => iconStyle(props)}
`;

export const SunIcon = styled(BsFillSunFill)`
  ${(props) => iconStyle(props)}
`;

export const ThemeIconS = styled.div`
  display: flex;
  justify-content: flex-end;
  /* justify-content: center; */
`;
