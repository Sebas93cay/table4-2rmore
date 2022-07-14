import React from 'react';
import { useWindowsSize } from '../../../../customHooks/useWindowsSize';
import { NavButtonS } from '../../../styledComponents/NavButtonStyled';
import { NavMenu } from './NavMenu';
import { NavS } from '../../../styledComponents/NavStyled';
import { screenWidths } from '../../../helpers/measures';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toggleDisplayMenu, hideMenu } from './menuSlice';
import { dropDownMenu } from '../../../helpers/strings';
import { ShadowLayer } from '../../../styledComponents/ShadowLayer';

export const Nav = () => {
  const dispatch = useDispatch();
  const { width } = useWindowsSize();
  const displayedMenu = useSelector((state) => state.menu.displayedMenu);
  const closeMenu = () => {
    dispatch(hideMenu());
  };
  return (
    <>
      <NavS>
        {width < screenWidths.tablet ? (
          <NavButtonS onClick={() => dispatch(toggleDisplayMenu())} />
        ) : (
          <NavMenu />
        )}
      </NavS>
      {/* {displayedMenu && <NavMenu type={dropDownMenu} active={displayedMenu} />} */}
      {width < screenWidths.tablet && (
        <>
          <NavMenu
            closeMenu={closeMenu}
            type={dropDownMenu}
            active={displayedMenu}
          />
          <ShadowLayer active={displayedMenu} onClick={closeMenu} />
        </>
      )}
    </>
  );
};
