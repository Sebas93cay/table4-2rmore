import React from 'react';
import { ParagraphS } from './styledComponents/paragraphStyled';
import {
  ProjectItemContainerS,
  ProjectItemTextS,
  ProjectThumbnailContainerS,
  ProjectThumbnailS,
} from './styledComponents/ProjectsSectionStyled';
import { SubTitleS } from './styledComponents/TitleStyled';

export const ProjectItem = ({ name, description, thumbnail }) => {
  return (
    <ProjectItemContainerS>
      {/* <ProjectItemShapeS> */}
      <ProjectThumbnailContainerS>
        <ProjectThumbnailS src={`images/thumbnails/${thumbnail}`} alt={name} />
      </ProjectThumbnailContainerS>
      {/* </ProjectItemShapeS> */}
      <ProjectItemTextS>
        <SubTitleS>{name}</SubTitleS>
        <ParagraphS>{description}</ParagraphS>
      </ProjectItemTextS>
    </ProjectItemContainerS>
  );
};
