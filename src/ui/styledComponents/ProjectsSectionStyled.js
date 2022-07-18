import styled from 'styled-components';
import { SectionS } from './SectionStyled';

export const ProjectSectionS = styled(SectionS)`
  display: flex;
  flex-direction: column;
`;

export const ProjectsContainerS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-inline: 1rem; */
`;

export const ProjectItemContainerS = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 4rem;
  max-width: 400px;
`;

export const ProjectThumbnailContainerS = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${(props) => props.theme.projectItemBorder};
  border-radius: 10px;
  overflow: hidden;
  margin-block-end: 1rem;
  &::after {
    content: '';
    display: block;
    padding-bottom: calc(100% * (3 / 5));
  }
`;

export const ProjectThumbnailS = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProjectItemTextS = styled.div``;
