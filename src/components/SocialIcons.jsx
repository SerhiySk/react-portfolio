import { socialLinks } from '../helpers/data';
import styled from 'styled-components';

const SocialIcons = () => {
  return (
    <Wrapper className="social-icons">
      {socialLinks.map((val, i) => {
        const { link, Icon } = val;
        return (
          <a href={link} className="social-icon" key={i}>
            <div className="container-svg">
              <Icon color="black" />
            </div>
          </a>
        );
      })}
    </Wrapper>
  );
};
export default SocialIcons;
const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  .container-svg {
    padding: 1rem;
    background: #afafaf;
    border-radius: 50px;
    margin-bottom: 2rem;
    transition: var(--transition);
    :hover {
      transform: scale(110%);
      background: #c8c8c8;
    }
  }
  svg {
    height: 40px;
    width: 40px;
    vertical-align: text-bottom;
  }
  path {
    margin-bottom: 0;
  }
`;
