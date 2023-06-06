import styled from 'styled-components';

const SingleSkill = ({ area, icon, items, order }) => {
  return (
    <Wrapper className={order}>
      <div className="container-icon">
        <img src={icon} alt={area} />
      </div>
      <h3>{area}</h3>
      <div className="skills">
        {items.map((val, i) => (
          <p key={i}>
            <span className="icon">☑️</span> {val}
          </p>
        ))}
      </div>
    </Wrapper>
  );
};
export default SingleSkill;

const Wrapper = styled.article`
  flex-basis: 100%;

  text-align: center;
  text-transform: capitalize;
  margin-bottom: 4rem;
  .container-icon {
    margin: 0 auto;
    height: 5rem;
    width: 5rem;
    position: relative;
  }
  .icon {
    color: var(--primary-500);
  }
  h3 {
    margin-bottom: 2rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .skills {
    width: fit-content;
    margin: 0 auto;
    text-align: start;
    p {
      width: fit-content;
      color: rgba(255, 255, 255, 0.743);
      margin-bottom: 1rem;
      letter-spacing: 4px;
    }
  }
  @media screen and (min-width: 687px) {
    flex-basis: 50%;
    margin-bottom: 7rem;
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 9rem;
  }
`;
