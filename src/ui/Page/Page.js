import React from 'react';
import { MainContainer } from './MainContainer';
import { PageS } from './PageStyled';

export const Page = ({ children }) => {
  return (
    <MainContainer>
      <PageS>{children}</PageS>
    </MainContainer>
  );
};
