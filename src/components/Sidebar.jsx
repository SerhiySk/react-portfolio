import SocialIcons from './SocialIcons';
import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';
import { scrollFunc } from '../helpers/functions';
const Sidebar = ({ isSidebar, setIsSidebar }) => {
  const closeSidebar = () => setIsSidebar(false);
  return (
    <Wrapper
      className={isSidebar ? 'sidebar show-sidebar' : 'sidebar'}
      id="sidebar"
      onClick={scrollFunc}
    >
      <div>
        <button id="close-btn" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className="sidebar-links">
          <li>
            <a className="link" onClick={closeSidebar} href="#home">
              home
            </a>
          </li>
          <li>
            <a className="link" onClick={closeSidebar} href="#about">
              about
            </a>
          </li>
          <li>
            <a className="link" onClick={closeSidebar} href="#services">
              services
            </a>
          </li>
          <li>
            <a className="link" onClick={closeSidebar} href="#projects">
              projects
            </a>
          </li>
        </ul>
        <SocialIcons />
      </div>
    </Wrapper>
  );
};
export default Sidebar;

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--grey-50);
  z-index: 11;
  display: grid;
  place-items: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  /* add later */
  -webkit-transform: translate(-100%);
  transform: translate(-100%);

  &.show-sidebar {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  .sidebar-links {
    text-align: center;
  }
  /* add sidebar links to navbar links */
  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--primary-700);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .sidebar-links a:hover {
    color: var(--primary-900);
    letter-spacing: 2px;
  }
  .social-icons {
    display: grid;
    margin-top: 3rem;
    width: 15rem;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  .social-icon {
    color: var(--primary-800);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .social-icon img {
    width: 100%;
    height: 100%;
  }
  .social-icon:hover {
    color: var(--primary-900);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: none;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #e66b6b;
    font-size: 3.5rem;
  }
`;
