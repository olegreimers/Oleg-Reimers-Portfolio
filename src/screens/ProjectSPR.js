import React from 'react';
import HeadTag from 'react-head';
import ProgressiveImage from '../components/ProgressiveImage';
import Footer from '../components/Footer';
import { ProjectContainer, ProjectSection, ProjectSectionContent, ProjectImage,
  ProjectSectionHeading, ProjectSectionText, ProjectBackground, ProjectHeader } from '../components/Project';
import { Media } from '../utils/StyleUtils';
import backgroundSpr from '../assets/spr-background.jpg';
import backgroundSprLarge from '../assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '../assets/spr-background-placeholder.jpg';
import imageSprBuilder from '../assets/spr-builder.png';
import imageSprBuilderLarge from '../assets/spr-builder-large.png';
import imageSprBuilderPlaceholder from '../assets/spr-builder-placeholder.png';

const title = 'Designing the future of education';
const description = 'I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
];

const ProjectSPR = () => (
  <React.Fragment>
    <ProjectContainer>
      <HeadTag tag="title">{`Projects | ${title}`}</HeadTag>
      <HeadTag
        tag="meta"
        name="description"
        content={description}
      />
      <ProjectBackground
        srcSet={`${backgroundSpr} 1000w, ${backgroundSprLarge} 1920w`}
        placeholder={backgroundSprPlaceholder}
      />
      <ProjectHeader
        title={title}
        description={description}
        url="https://www.smartsparrow.com"
        roles={roles}
      />
      <ProjectSection>
        <ProjectSectionContent>
          <ProjectImage status="entered">
            <ProgressiveImage
              srcSet={`${imageSprBuilder} 800w, ${imageSprBuilderLarge} 1440w`}
              placeholder={imageSprBuilderPlaceholder}
              sizes={`(max-width: ${Media.mobile}) 500px, (max-width: ${Media.tablet}) 800px, 1000px`}
              width="1280px"
              height="800px"
            />
          </ProjectImage>
        </ProjectSectionContent>
      </ProjectSection>
      {false &&
        <React.Fragment>
        <ProjectSection center>
          <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
          <ProjectSectionText>
            The goal of the new product design was to make creating online learning better for
            teams. As part of my role as lead product designer, I worked to create a consistent
            design system that allowed us to quickly design and build prototypes for user testing.
          </ProjectSectionText>
        </ProjectSection>
        <ProjectSection center>
          <ProjectSectionHeading>A living design system</ProjectSectionHeading>
          <ProjectSectionText>
            The goal of the new product design was to make creating online learning better for
            teams. As part of my role as lead product designer, I worked to create a consistent
            design system that allowed us to quickly design and build prototypes for user testing.
          </ProjectSectionText>
        </ProjectSection>
        <ProjectSection center>
          <ProjectSectionHeading>Designing for teams</ProjectSectionHeading>
          <ProjectSectionText>
            The goal of the new product design was to make creating online learning better for
            teams. As part of my role as lead product designer, I worked to create a consistent
            design system that allowed us to quickly design and build prototypes for user testing.
          </ProjectSectionText>
        </ProjectSection>
        </React.Fragment>
      }
    </ProjectContainer>
    <Footer />
  </React.Fragment>
);

export default ProjectSPR;