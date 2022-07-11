import React from 'react';
import { useWindowsSize } from '../../../../customHooks/useWindowsSize';
import { NavButtonS } from '../../../styledComponents/NavButtonStyled';
import { NavMenu } from './NavMenu';
import { NavS } from '../../../styledComponents/NavStyled';
import { screenWidths } from '../../../helpers/measures';

export const Nav = () => {
  const { width } = useWindowsSize();
  return (
    <NavS>{width < screenWidths.tablet ? <NavButtonS /> : <NavMenu />}</NavS>
  );
};
