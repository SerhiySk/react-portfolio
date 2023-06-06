import styled from 'styled-components';

const SingleService = ({ Icon, service, description }) => {
  return (
    <Wrapper className="service">
      <div className="header">
        {' '}
        <div className="container-icon">
          <Icon className="service-icon" />
        </div>
        <h4>{service}</h4>
      </div>
      <div className="underline"></div>
      <p>{description}</p>
    </Wrapper>
  );
};
export default SingleService;

const Wrapper = styled.article`
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  background: var(--black-lighter);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  max-width: 600px;
  transition: var(--transition);
  :hover {
    box-shadow: var(--shadow-4);
  }
  .header {
    text-align: center;
    margin-bottom: 1rem;
  }
  .container-icon {
    margin: 0 auto;
    margin-bottom: 0.7rem;
    width: fit-content;
    padding: 1rem;
    background: var(--primary-500);
    border-radius: 50px;
    transition: var(--transition);
  }
  svg {
    height: 40px;
    width: 40px;
    vertical-align: text-bottom;
    color: var(--white);
  }
  path {
    color: var(--black);
  }
  .service-icon {
    color: var(--primary-300);
    font-size: 2rem;
  }
  .underline {
    height: 0.1rem;
    width: 6rem;
  }
  h4 {
    color: var(--white);

    margin-bottom: 0;
    font-weight: 600;
  }
  p {
    /* letter-spacing: 1.2px; */
    /* line-height: 1.4; */
  }
`;
