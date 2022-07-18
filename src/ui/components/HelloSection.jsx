import React, { useEffect, useState } from 'react';

import { useComponentBounding } from '../../customHooks/useComponentSize';
import { TitleS, BigNameS } from '../styledComponents/TitleStyled';
import {
  HelloSectionS,
  HiMessagesS,
  ProfileImageContainerS,
  ProfileImageS,
} from '../../ui/styledComponents/HelloSectionStyled';
import { ParagraphS } from '../../ui/styledComponents/paragraphStyled';

export const HelloSection = () => {
  const { bounding: HomePageBounding, ref: HelloSectionRef } =
    useComponentBounding();
  const [profilePicWidth, setProfilePicWidth] = useState(0);

  useEffect(() => {
    setProfilePicWidth(HomePageBounding.width * 0.7);
  }, [HomePageBounding]);

  return (
    <HelloSectionS ref={HelloSectionRef}>
      <HiMessagesS>
        <TitleS message='hiMessage'>Hey Hi!!</TitleS>
        <TitleS>
          My name is <BigNameS>Sebastian Caicedo</BigNameS>
        </TitleS>
        <ParagraphS>
          Curious and ever learning Full-Stack Software developer from Colombia
        </ParagraphS>
      </HiMessagesS>
      <ProfileImageContainerS width={profilePicWidth}>
        <ProfileImageS src='/images/perfil.jpg' alt='' />
      </ProfileImageContainerS>
    </HelloSectionS>
  );
};
