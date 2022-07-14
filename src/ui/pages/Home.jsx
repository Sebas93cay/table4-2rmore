import React from 'react';
import { HelloSectionS } from '../styledComponents/HelloSectionStyled';
import { SectionS } from '../styledComponents/SectionStyled';
import { TitleS, BigNameS } from '../styledComponents/TitleStyled';

export const Home = () => {
  return (
    <>
      <SectionS>
        <HelloSectionS>
          <TitleS message='hiMessage'>Hey Hi!!</TitleS>
          <TitleS>
            {/* <TitleS shadowColor={false}> */}
            My name is <BigNameS>Sebastian Caicedo</BigNameS>
          </TitleS>
        </HelloSectionS>
      </SectionS>
    </>
  );
};
