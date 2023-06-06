import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SingleProject = ({
  index,

  setProject,
  title,
  client,
  img,
  file,
  textLead,
  overview,
}) => {
  const handleClick = e => {
    e.preventDefault();
    setProject({ file, title, textLead, overview });
  };
  return (
    <Wrapper href="#" onClick={handleClick} className={'project-' + index}>
      <article className={'project project-' + index}>
        <img src={img} alt={title} className="project-img" />
        <div className="project-info">
          <h4>{title}</h4>
          <p>{client}</p>
        </div>
      </article>
    </Wrapper>
  );
};
export default SingleProject;
const Wrapper = styled.a`
  .project {
    width: 100%;
    height: 300px;
    margin-bottom: 1rem;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .project-info {
    text-align: center;
    color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    opacity: 0;
  }
  .project-info p {
    text-transform: capitalize;
    color: var(--white);
  }
  .project:hover .project-info {
    opacity: 1;
  }
  .project-img {
    -webkit-transition: var(--transition);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    -o-object-fit: cover;
    object-fit: cover;
  }
  .project:hover .project-img {
    opacity: 0.5;
  }
  .project::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.25rem solid var(--white);
    border-radius: var(--borderRadius);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    opacity: 0;
  }
  .project:hover::after {
    opacity: 1;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  @media screen and (min-width: 687px) {
    .project {
      height: 100%;
      position: relative;
    }
  }
`;
