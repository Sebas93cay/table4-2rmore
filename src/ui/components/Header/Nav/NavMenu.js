import React from 'react';
import { Link } from 'react-router-dom';
import {
  LinkS,
  NavItemS,
  NavMenuS,
} from '../../../styledComponents/NavMenuStyled';

export const NavMenu = () => {
  return (
    <NavMenuS>
      <NavItemS>
        <LinkS to='about'>About</LinkS>
      </NavItemS>
      <NavItemS>Resume</NavItemS>
      <NavItemS>
        <LinkS to='work'>Work</LinkS>
      </NavItemS>
      {/* <NavItemS>Lessons</NavItemS> */}
      <NavItemS>
        <LinkS to='contact'>Contact</LinkS>{' '}
      </NavItemS>
    </NavMenuS>
  );
};
