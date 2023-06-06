import SocialIcons from './SocialIcons';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import BtnHire from './BtnHire';
import heroImg from '../assets/images/hero-image.png';
const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <Wrapper
      className="hero home"
      id="home"
      style={{
        background: `center / cover no-repeat  url(${heroImg})`,
        backgroundPosition: `50% calc(50% + ${scrollPosition / 3}px)`,
      }}
    >
      <div className="section-center hero-center">
        <article className="hero-info">
          <h2>
            i'm <span className="header-text-1">Serhiy Skarbek</span>{' '}
          </h2>
          <h2 className="role">Full-stack {`(MERN)`} developer</h2>
          <BtnHire />
        </article>
      </div>
    </Wrapper>
  );
};
export default Hero;
const Wrapper = styled.header`
  ::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  .hero-center {
    min-height: 100vh;
    display: grid;
    place-items: center;
    position: relative;
    -webkit-box-align: center;
    color: var(--white);
  }

  .role {
    margin-bottom: 4rem;
  }
`;
