import React from 'react';

import { SectionHeaderS } from '../styledComponents/SectionStyled';
import { TitleSectionS } from '../styledComponents/TitleStyled';
import { ProjectsSectionS } from '../styledComponents/ProjectsSectionStyled';
import { projectList } from '../../Data/projects';
import { ProjectItem } from '../ProjectItem';
import { ProjectsContainerS } from '../styledComponents/ProjectsSectionStyled';
import { MainButton } from '../styledComponents/ButtonsStyled';

export const ProjectsSection = () => {
  return (
    <ProjectsSectionS>
      <SectionHeaderS>
        <TitleSectionS message='sectionTitle'>Featured Projects</TitleSectionS>
        <MainButton>See All</MainButton>
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
    </ProjectsSectionS>
  );
};
