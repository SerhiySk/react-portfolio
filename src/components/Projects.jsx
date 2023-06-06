import SingleProject from './SingleProject';
import { projects } from '../helpers/data';
import styled from 'styled-components';

const Projects = ({ setProject }) => {
  return (
    <Wrapper className="section projects" id="projects">
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
      </div>
      <p className="projects-text">
        I have worked on various projects throughout my career, and I'm proud to
        show off the results of my hard work. My portfolio showcases some of the
        projects I've recently completed, from developing a single page website
        to creating an entire web app.
      </p>
      <div className="section-center projects-center">
        {projects.map((project, i) => (
          <SingleProject
            key={i}
            {...project}
            setProject={setProject}
            index={i}
          />
        ))}
      </div>
    </Wrapper>
  );
};
export default Projects;

const Wrapper = styled.section`
  background: var(--black);
  padding-bottom: 7rem;
  .section-title {
    margin-bottom: 2rem;
  }
  .projects-text {
    width: 85vw;
    max-width: 30rem;
    margin: 0 auto;
    margin-bottom: 4rem;
    color: rgba(255, 255, 255, 0.4);
    /* text-align: center; */
  }
  .projects-center {
    max-width: var(--max-width);
  }
  @media screen and (min-width: 687px) {
    .projects-center {
      display: grid;
      grid-template-areas:
        'a a'
        'b c'
        'b c'
        'd e'
        'f g';
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(5, 300px);
      gap: 2rem;
    }
    .project-0 {
      grid-area: a;
    }
    .project-1 {
      grid-area: b;
    }
    .project-2 {
      grid-area: c;
    }
  }
  @media screen and (min-width: 878px) {
    .projects-center {
      display: grid;
      grid-template-areas:
        'a a c'
        'b b e'
        'd f g';

      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 330px);
      gap: 2rem;
    }
    .project-0 {
      grid-area: a;
    }
    .project-1 {
      grid-area: b;
    }
    .project-2 {
      grid-area: c;
    }
  }
`;
