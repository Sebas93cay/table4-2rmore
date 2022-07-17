import React, { useEffect, useRef, useState } from 'react';
import { SectionS } from '../styledComponents/SectionStyled';
import { TitleS, BigNameS } from '../styledComponents/TitleStyled';
import {
  HelloSectionS,
  HiMessages,
} from '../../ui/styledComponents/HelloSectionStyled';
import {
  ProfileImageS,
  ProfileImageContainerS,
} from '../styledComponents/imagesStyled';
import { useComponentBounding } from '../../customHooks/useComponentSize';
import { ParagraphS } from '../../ui/styledComponents/paragraphStyled';

export const Home = () => {
  const { bounding: HomePageBounding, ref: HomePageRef } =
    useComponentBounding();
  const [profilePicWidth, setProfilePicWidth] = useState(0);

  useEffect(() => {
    setProfilePicWidth(HomePageBounding.width * 0.7);
    console.log(profilePicWidth);
  }, [HomePageBounding]);
  return (
    <>
      <SectionS ref={HomePageRef}>
        <HelloSectionS>
          <HiMessages>
            <TitleS message='hiMessage'>Hey Hi!!</TitleS>
            <TitleS>
              My name is <BigNameS>Sebastian Caicedo</BigNameS>
            </TitleS>
            <ParagraphS>
              Curious and ever learning Full-Stack Software developer from
              Colombia
            </ParagraphS>
          </HiMessages>
          <ProfileImageContainerS width={profilePicWidth}>
            <ProfileImageS src='/images/perfil.jpg' alt='' />
          </ProfileImageContainerS>
        </HelloSectionS>
      </SectionS>
    </>
  );
};
