import React from 'react';
import { MainContainer } from './MainContainer';
import { PageS } from '../../styledComponents/PageStyled';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Page = () => {
  return (
    <MainContainer>
      <PageS>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </PageS>
    </MainContainer>
  );
};
