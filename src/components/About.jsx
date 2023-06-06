import img from '../assets/images/about-image.png';
import styled from 'styled-components';
import BtnHire from './BtnHire';
const About = () => {
  return (
    <Wrapper className="section about" id="about">
      <div className="section-center">
        <article className="about-img">
          <img src={img} className="about-image" alt="about-image" />
        </article>
        <article className="about-info">
          <div className="section-title">
            <h2>about</h2>
            <div className="underline"></div>
          </div>
          <div className="container-text">
            <p className="text-lead">
              I am highly committed to delivering successful web development
              solutions to my clients and I take pride in providing them with
              top-notch services. My background in MERN stack, CSS and HTML
            </p>
            <p className="text">
              technologies has enabled me to create web applications that are
              both visually appealing and technically robust. I understand the
              importance of responsiveness and I ensure that my web development
              solutions are able to handle complex tasks such as API
            </p>
            {/* developement and Web Designing. In addition, I also have the
              ability to create secure MongoDB databases for storing data and
              creating APIs for back-end processing. */}

            {/* 
            <p>
              Recently completed a project called 'Trimman' which was an
              e-commerce application built with React.js & Redux Library for
              front-end design, Node.Js using Express library as API back end
              and MongoDB database storing data securely - offering clients
              reliable responsive designs both on server or client side while
              being able to handle complex tasks such as APIs developement & Web
              Designing too!
            </p> */}
          </div>
          <BtnHire />
        </article>
      </div>
    </Wrapper>
  );
};
export default About;

const Wrapper = styled.section`
  background: var(--black-lighter);
  padding-top: 15rem;
  padding-bottom: 10rem;
  .about-info {
    width: 80vw;
    margin: 0 auto;
  }
  .about-img {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 4rem;
    height: 100%;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .section-title {
    margin-left: 0;
    margin-bottom: 1.5rem;
  }
  .underline {
    margin: 0;
  }
  p {
    margin-bottom: 1rem;
  }
  .container-text {
    margin-bottom: 3rem;
    max-width: 892px;
    color: rgba(255, 255, 255, 0.743);
  }
  .btn-hire {
    margin-top: 1rem;
  }
  @media screen and (min-width: 1092px) {
    .section-center {
      width: 95vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: start;
      place-items: start;
      justify-content: start; /* adjustment */
      align-items: stretch;
    }
    .about-info {
      width: 100%;
      margin: 0;
    }
    .about-img {
      align-self: center;
      margin-left: 0;

      width: 95%;
      margin-bottom: 4rem;
      height: fit-content;
      position: relative;
    }
  }
`;
