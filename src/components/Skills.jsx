import { skills } from '../helpers/data';
import SingleSkill from './SingleSkill';
import styled from 'styled-components';

const Skills = () => {
  return (
    <Wrapper className="skills section" id="skills">
      <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center skills-center">
        {skills.map((val, i) => {
          return (
            <SingleSkill
              key={i}
              order={i % 2 === 0 ? 'left' : 'right'}
              {...val}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Skills;

const Wrapper = styled.section`
  background: var(--black-lighter);
  .skills-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 2000px;

    padding-bottom: 2rem;
  }

  @media screen and (min-width: 687px) {
    .left {
      border-right: 2px dashed var(--primary-500);
    }
  }
`;
