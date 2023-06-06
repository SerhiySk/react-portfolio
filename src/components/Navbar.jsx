import Navlinks from './Navlinks';
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const Navbar = ({ setIsSidebar }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = e => {
    setScrollTop(e.target.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
  const openSidebar = () => setIsSidebar(true);
  return (
    <Wrapper className={scrollTop > 80 ? 'nav navbar-fixed' : 'nav'} id="nav">
      <div className="nav-center">
        <button className="nav-btn" id="nav-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </Wrapper>
  );
};
export default Navbar;
const Wrapper = styled.nav`
  height: 5rem;
  width: 100%;
  background: transparent;
  position: absolute;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  padding: 1rem;
  z-index: 10;
  color: var(--white);

  .nav-links {
    display: none;
  }

  .logo {
    font-size: 2rem;
    font-weight: 900;
  }
  .logo-styled {
    color: var(--primary-600);
  }
  .nav-center {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--white);
    font-size: 2rem;
    cursor: pointer;
    /* show later */
    justify-self: right;
    transition: var(--transition);
    :hover {
      font-size: 3rem;
    }
  }
  &.navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
  @media screen and (min-width: 768px) {
    .nav-center {
      width: 80%;
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      justify-items: center;
    }
    .nav-links a {
      text-transform: uppercase;
      color: var(--white);
      font-weight: 400;
      font-size: 1.2rem;
      letter-spacing: 3px;
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--primary-600);
    }

    .nav-links {
      justify-self: end;
    }
    &.navbar-fixed {
      background: var(--white);

      box-shadow: var(--light-shadow);
      .nav-links a {
        color: var(--black);
        &.first {
          color: var(--primary-600);
        }
      }
    }
  }
  /* fixed navbar */
`;
