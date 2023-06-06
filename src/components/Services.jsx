import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';
import SingleService from './SingleService';
import { services } from '../helpers/data';
import styled from 'styled-components';

const Services = () => {
  return (
    <Wrapper className="section" id="services">
      <div className="section-center">
        <div className="section-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center services-center">
          {services.map((val, i) => (
            <SingleService key={i} {...val} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default Services;

const Wrapper = styled.section`
  background: var(--black);
  padding-bottom: 6rem;

  .services-center {
    display: grid;
    place-content: center;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 891px) {
    .services-center {
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 1292px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
