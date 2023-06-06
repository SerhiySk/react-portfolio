import { scrollFunc } from '../helpers/functions';
import { navLinks } from '../helpers/data';
const NavLinks = () => {
  return (
    <ul className="nav-links" onClick={scrollFunc}>
      {navLinks.map((link, i) => (
        <li key={i}>
          <a
            className={`nav_link link ${i === 0 ? 'first' : ''}`}
            href={`#${link}`}
            key={i}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
