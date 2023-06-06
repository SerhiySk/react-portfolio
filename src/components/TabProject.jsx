import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TabProject = ({ title, file, textLead, setProject, overview }) => {
  console.log(file);

  return (
    <Wrapper
      className={
        file ? 'overlay-portfolio show-portfolio' : 'overlay-portfolio'
      }
    >
      <button className="close-btn" onClick={() => setProject(null)}>
        <FaTimes></FaTimes>
      </button>
      <div className="container-portfolio">
        <object data={file} className="tab-portfolio">
          GeeksforGeeks
        </object>
        <div className="portfolio-description">
          <div className="header-portfolio">
            {' '}
            <div className="section-title">
              {' '}
              <h2>{title}</h2>
              <div className="underline"></div>{' '}
            </div>
          </div>
          {textLead()}
          {overview.map((subProject, index) => {
            const { title, linkProject, linkCode, text, list } = subProject;
            return (
              <div className="subproject" key={index}>
                <hr />

                {title && <h4>{title}:</h4>}
                {text()}
                <div className="container-tools">
                  <p>Tools:</p>
                  <ul>
                    {list.map((val, i) => (
                      <li key={i}>
                        {' '}
                        <p> {val}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="container-links">
                  {linkProject && (
                    <Link to={linkProject} className="btn" target="_blank">
                      View project
                    </Link>
                  )}
                  {linkCode && (
                    <Link to={linkCode} className="btn" target="_blank">
                      View code
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default TabProject;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: hidden;
  z-index: -1;
  &.show-portfolio {
    visibility: visible;
    z-index: 2;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;

    border: 1px dashed var(--textColor);
  }
  h4 {
    margin: 0;
    color: var(--textColor);
  }
  .container-tools {
    margin-top: 0.5rem;

    margin-bottom: 1rem;
  }
  li {
    list-style-type: disc;
    margin-left: 1rem;

    text-transform: capitalize;
  }
  /* Btn */

  .btn {
    --color: var(--primary-500);
    --color2: rgb(10, 25, 30);
    background-color: transparent;
    border-radius: 6px;
    border: 0.3px solid var(--color);
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 300;
    /* font-size: 17px; */
    text-transform: uppercase;
    color: var(--color);
  }
  @media screen and (min-width: 492px) {
    .btn {
      padding: 0.8em 1.75em;
    }
  }

  .btn::after,
  .btn::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: var(--color);
  }

  .btn::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
  }

  .btn:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
  }

  .btn:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
  }

  .btn:hover {
    color: var(--color2);
  }

  .btn:active {
    filter: brightness(0.7);
    transform: scale(0.98);
  }
  /* Btn */

  .close-btn {
    top: 0;
    right: 0;
    z-index: 3;
    position: absolute;

    font-size: 3rem;
    background: transparent;
    border: none;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }
  .container-portfolio {
    background: var(--black);
    border-radius: var(--borderRadius);
    width: 90vw;
    height: 95vh;
    max-width: var(--max-width);
    display: grid;
    grid-template-rows: 1fr 1fr;
    text-align: start;
    place-items: center;
    position: relative;
  }
  .section-title {
    margin-bottom: 0.7rem;
  }
  .tab-portfolio {
    width: 100%;
    height: 100%;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  @media screen and (min-width: 1192px) {
    .container-portfolio {
      width: 90vw;
      height: 90vh;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      text-align: start;
    }
    .section-title {
      text-align: start;
      margin-left: 0;
    }
    .underline {
      margin-left: 0;
    }

    .close-btn {
      top: 1rem;
      right: 1rem;
    }
    .tab-portfolio {
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: 0;

      border-bottom-left-radius: var(--borderRadius);
    }
    .header-portfolio {
      margin-left: 0;
    }
  }
  .portfolio-description {
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  .portfolio-description p b {
    color: var(--grey-200);
  }
  .header-portfolio {
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .container-links {
    display: flex;
    justify-content: space-around;
  }
`;
