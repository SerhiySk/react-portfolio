import SocialIcons from './SocialIcons';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper className="footer">
      <SocialIcons />

      <p>
        &copy; <span id="date"></span> Serhiy Skarbek. All rights reserved.
      </p>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  background: var(--black);
  padding: 3rem;
  text-align: center;
  p {
    color: var(--white-darker);
  }
`;
