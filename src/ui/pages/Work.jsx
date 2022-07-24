import React from 'react';

import {
  SectionHeaderS,
  TitledSectionS,
} from '../styledComponents/SectionStyled';
import { SectionTitleS } from '../styledComponents/TitleStyled';
import { projectList } from '../../Data/projects';
import { ProjectItem } from '../ProjectItem';
import { ProjectsContainerS } from '../styledComponents/ProjectsSectionStyled';
import { MainButton } from '../styledComponents/ButtonsStyled';

export const Work = () => {
  return (
    <TitledSectionS>
      <SectionHeaderS>
        <SectionTitleS message='sectionTitle'>Projects</SectionTitleS>
      </SectionHeaderS>
      <ProjectsContainerS>
        {projectList.map((project, index) => (
          <ProjectItem
            {...project}
            key={project.name}
            reverse={index % 2}
          ></ProjectItem>
        ))}
      </ProjectsContainerS>
    </TitledSectionS>
  );
};
