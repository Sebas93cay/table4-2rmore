import React from 'react';
import { MainContainerS } from '../../styledComponents/MainContainerStyled';
import { PageS } from '../../styledComponents/PageStyled';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { SectionsContainerS } from '../../styledComponents/SectionsContainerStyled';
import { hideMenu } from '../Header/Nav/menuSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { ShadowLayer } from '../../styledComponents/ShadowLayer';

export const Page = () => {
  const dispatch = useDispatch();
  const displayedMenu = useSelector((state) => state.menu.displayedMenu);

  return (
    <MainContainerS>
      <PageS>
        <Header />
        <SectionsContainerS>
          <Outlet />
        </SectionsContainerS>
        {/* <Footer /> */}
      </PageS>
    </MainContainerS>
  );
};
