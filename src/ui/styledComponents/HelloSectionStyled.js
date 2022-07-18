import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';
import { ImageS } from './imagesStyled';
import { SectionS } from './SectionStyled';

export const HelloSectionS = styled(SectionS)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: 400px 1fr;
  }
`;

export const HiMessagesS = styled.div`
  margin-bottom: 50px;
`;

export const ProfileImageS = styled(ImageS)`
  border-radius: 50%;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const ProfileImageContainerS = styled.div`
  height: ${(props) => props.width + 'px'};
  width: ${(props) => props.width + 'px'};
  max-height: 400px;
  max-width: 400px;
  @media (${mediaQueries.desktop}) {
    padding: 40px;
  }
`;
