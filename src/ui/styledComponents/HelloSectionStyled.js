import styled from 'styled-components';
import { mediaQueries } from '../helpers/measures';
import { ImageS } from './imagesStyled';

export const HelloSectionS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 50px;
  @media (${mediaQueries.desktop}) {
    display: grid;
    grid-template-columns: 400px 1fr;
  }
`;

export const HiMessages = styled.div`
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
    padding: 20px;
  }
`;
