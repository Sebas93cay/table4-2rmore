import React from 'react';
import { SectionHeaderS, SectionS } from '../styledComponents/SectionStyled';
import { TitleSectionS } from '../styledComponents/TitleStyled';
import { ProjectSectionS } from '../styledComponents/ProjectsSectionStyled';
import { projectList } from '../../Data/projects';
import { ProjectItem } from '../ProjectItem';
import { ProjectsContainerS } from '../styledComponents/ProjectsSectionStyled';
import { HelloSection } from '../components/HelloSection';

export const Home = () => {
  return (
    <>
      <SectionS>
        <HelloSection />
        <ProjectSectionS>
          <SectionHeaderS>
            <TitleSectionS message='sectionTitle'>
              Featured Projects
            </TitleSectionS>
            <button>See All</button>
          </SectionHeaderS>
          <ProjectsContainerS>
            {projectList.map((project) => (
              <ProjectItem {...project} key={project.name}></ProjectItem>
            ))}
          </ProjectsContainerS>
        </ProjectSectionS>
      </SectionS>
    </>
  );
};
