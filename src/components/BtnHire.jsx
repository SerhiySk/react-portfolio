import styled from 'styled-components';
const BtnHire = () => {
  return (
    <Wrapper
      href="https://www.upwork.com/freelancers/skarbek"
      className="btn-hire"
    >
      <span>hire me</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </Wrapper>
  );
};
export default BtnHire;

const Wrapper = styled.a`
  position: relative;
  text-transform: capitalize;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: var(--primary-400);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
    width: 45px;
    height: 45px;
    transition: var(--transition);
  }

  span {
    position: relative;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #fff;
    transition: var(--transition);
  }

  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--primary-800);
    stroke-width: 2;
    transform: translateX(-5px);
    transition: var(--transition);
  }

  :hover {
    :before {
      width: 100%;
      background: var(--primary-600);
    }
    svg {
      transform: translateX(0);
    }
    span {
      letter-spacing: 2px;
    }
  }

  :active {
    transform: scale(0.95);
  }

  /* later in the media query */

  @media screen and (min-width: 992px) {
    padding: 18px 27px;

    :before {
      width: 67px;
      height: 67px;
      top: 50%;
      transform: translateY(-50%);
    }

    svg {
      stroke-width: 3;
    }
  }
`;
