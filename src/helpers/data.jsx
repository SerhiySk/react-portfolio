import { BsGithub } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import projectImg1 from '../assets/images/trimmers.jpg';
import projectImg2 from '../assets/images/backroads.jpeg';
import projectImg3 from '../assets/images/forkify.png';
import projectImg4 from '../assets/images/form.png';
import projectImg5 from '../assets/images/bankist.png';
import projectImg6 from '../assets/images/jobster.png';
import projectImg7 from '../assets/images/bookIs.png';

import projectFile1 from '../assets/files/Trimman.pdf';
import projectFile2 from '../assets/files/HTML_CSS_backroads.pdf';
import projectFile3 from '../assets/files/javascript_forkify.pdf';
import projectFile4 from '../assets/files/Form.pdf';
import projectFile5 from '../assets/files/Bankist.pdf';
import projectFile6 from '../assets/files/Jobster.pdf';
import projectFile7 from '../assets/files/BookIs.pdf';

import iconFrontEnd from '../assets/images/frontend.png';
import iconBackEnd from '../assets/images/backend.png';
import iconDatabase from '../assets/images/database.png';
import iconOthers from '../assets/images/others.png';

export const navLinks = ['home', 'about', 'services', 'projects'];

export const socialLinks = [
  {
    link: 'https://www.upwork.com/freelancers/skarbek',
    Icon: () => (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="IconChangeColor"
        height="40"
        width="40"
      >
        <title>Upwork</title>
        <path
          d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
          id="mainIconPathAttribute"
          fill="green"
          transform="translate(0, 1.5)"
        ></path>
      </svg>
    ),
  },
  {
    link: 'https://github.com/SerhiySk',
    Icon: BsGithub,
  },
];

export const services = [
  {
    description: `
    I specialize in creating, managing, and updating high-performance websites. Additionally, I offer troubleshooting services to promptly resolve any website issues.`,
    service: 'web development',
    Icon: FaCode,
  },
  {
    description:
      'I work on designing and revamping websites. My goal is to create a website that is both functional and visually appealing while ensuring fast loading times and compatibility across various devices.',
    service: 'web design',
    Icon: MdOutlineDesignServices,
  },
  {
    description: `I am experienced in utilizing the MERN stack to create APIs, and can confidently craft custom API endpoints that cater to the specific needs of the application.`,
    service: 'API development',
    Icon: TbApi,
  },
];

export const projects = [
  {
    title: 'E-commerce-Trimman',
    client: 'Serhiy',
    img: projectImg1,
    file: projectFile1,

    textLead: () => (
      <p className="text-lead">
        I used the MERN stack to build the Trimman E-commerce web app, which
        includes both client and API. <br /> <br /> Main user-flows: <br />
        Sign In/Up, Reset/Verify Password, Update Personal Info, Add to
        Cart/Checkout the Product
      </p>
    ),
    overview: [
      {
        title: 'client',
        linkProject: 'https://trimman.netlify.app/',
        linkCode: 'https://github.com/SerhiySk/E-commerce-trimmers',
        text: () => (
          <p>
            I used redux library to centrally store application data in a
            predictable manner. For styling, I utilized styled-components
            library.
          </p>
        ),
        list: [
          'React.js | Redux',
          'React-stripe | Axios',
          'Styled-components | CSS',
          'Netlify | Proxy',
        ],
      },
      {
        title: 'server',
        linkProject: 'https://e-commerce-trimmers-api.onrender.com',
        linkCode: 'https://github.com/SerhiySk/E-commerce-trimmers-API',

        text: () => (
          <p>
            I have built the API with full CRUD functionality, enabling admins
            to view, add, edit and delete items from inventory in realtime. To
            store and manage data, I employed MongoDB with Mongoose framework.
          </p>
        ),
        list: [
          'node.js | express.js',
          'mongoDB | mongoose',
          'cookie-parser | JWT',
          'stripe | nodemailer',
        ],
      },
    ],
  },
  {
    title: 'Jobster app',
    client: 'Serhiy',
    img: projectImg6,
    file: projectFile6,

    textLead: () => (
      <p className="text-lead">
        The Jobster platform was developed using the MERN stack, which includes
        both the client and API.
        <br />
        To access the dashboard, the user needs to login. Four pages are
        available on the dashboard:
        <br />
        &nbsp;1. Stats: displays statistics of the user's activities
        <br />
        &nbsp;2. All Jobs: enables the user to search, sort, and filter jobs
        <br />
        &nbsp;3. Add Jobs: allows the user to create new jobs or modify existing
        ones
        <br />
        &nbsp;4. Profile: provides the option to edit account information.
      </p>
    ),
    overview: [
      {
        title: 'client',
        linkProject: 'https://jobster-app-react.netlify.app',
        linkCode: 'https://github.com/SerhiySk/Jobster-client',
        text: () => (
          <p>
            I used React to build the app and I utilized redux to store
            information.
          </p>
        ),
        list: [
          'React.js | Redux',
          'Axios',
          'Styled-components | CSS',
          'Netlify',
        ],
      },
      {
        title: 'server',
        linkProject: 'https://jobster-api-r05y.onrender.com',
        linkCode: 'https://github.com/SerhiySk/Jobster-API',

        text: () => (
          <p>
            The API allows for creating, reading, updating, and deleting
            job-related data, using a variety of programming languages.
          </p>
        ),
        list: [
          'node.js | express.js',
          'mongoDB | mongoose',
          'cookie-parser | JWT',
          'recharts',
        ],
      },
    ],
  },
  {
    title: 'BookIs',
    client: 'Serhiy',
    img: projectImg7,
    file: projectFile7,

    textLead: () => (
      <p className="text-lead">
        I built BookIs, a top-notch web app with React.js and Google Books API.
        It allows easy search, sort, and filter of an extensive book collection
        and hassle-free viewing of selected books.
      </p>
    ),
    overview: [
      {
        linkProject: 'https://book-is.netlify.app',
        linkCode: 'https://github.com/SerhiySk/google-books-APP',
        text: () => (
          <p>
            The application has been designed with responsive capabilities and
            features a sleek neomorphic style.
          </p>
        ),
        list: ['React | HTML | CSS', 'GoogleAPI | axios', 'styled-components'],
      },
    ],
  },
  {
    title: 'bankist-landing-page',
    client: 'Serhiy',
    img: projectImg5,
    file: projectFile5,

    textLead: () => (
      <p className="text-lead">
        Bankist was designed to be aesthetically pleasing and user friendly. I
        used HTML, CSS, and Javascript to create a landing page with the goal of
        showcasing bank products in an organized manner.
      </p>
    ),
    overview: [
      {
        linkProject: 'https://landing-page-bankist.netlify.app/',
        linkCode:
          'https://github.com/SerhiySk/Js-CSS-HTML---bankist-landing-page',
        text: () => (
          <p>
            I implemented responsive design using HTML&CSS, Javascript for lazy
            loading images, and an eye-catching color palette with well-placed
            typography. This ensured users had a great experience on any device.
          </p>
        ),
        list: [
          'CSS | HTML | Javascript',
          'CSS media queries',
          'CSS flexbox | grid',
        ],
      },
    ],
  },
  {
    title: 'BackRoads',
    client: 'Serhiy',
    img: projectImg2,
    file: projectFile2,

    textLead: () => (
      <p className="text-lead">
        I created the 'BackRoads' single page as a practice project to showcase
        my understanding of HTML, CSS, and Javascript. My main aim was to
        incorporate responsive design principles to ensure that the page can be
        accessed seamlessly on different devices with varying screen sizes.
      </p>
    ),
    overview: [
      {
        linkCode: 'https://github.com/SerhiySk/HTML-CSS-backroads',
        text: () => (
          <p>
            As such, css media queries were used to set up breakpoints and
            define how each element on the page should be displayed at different
            viewport widths.
          </p>
        ),
        list: ['CSS | HTML | Javascript', 'CSS media queries', 'CSS flexbox'],
      },
    ],
  },

  {
    title: 'forkify',
    client: 'Serhiy',
    img: projectImg3,
    file: projectFile3,

    textLead: () => (
      <p className="text-lead">
        The 'forkify' project allows users to search for recipes using the API,
        filter the retrieved recipes according to their dietary preferences, as
        well as add ingredients they want to purchase into a shopping list
        feature.
      </p>
    ),
    overview: [
      {
        linkCode: 'https://github.com/SerhiySk/javascript-forkify',
        text: () => (
          <p>
            The 'forkify' project featured API integration for recipes, as well
            as an algorithm for calculating the necessary ingredient amounts. I
            employed responsive design with HTML & CSS to bring it to life, and
            the experience was a great opportunity to further my front-end
            development skills.
          </p>
        ),
        list: [
          'CSS | HTML | Javascript',
          'API integration | AJAX',
          'local storage',
        ],
      },
    ],
  },
  {
    title: '"Sign in/up" Form',
    client: 'Serhiy',
    img: projectImg4,
    file: projectFile4,

    textLead: () => (
      <p className="text-lead">
        This form example was built using HTML and CSS, making it fully
        responsive to a variety of devices. Through the use of CSS, I was able
        to customize the design of the form and make sure that various elements
        responded correctly to different screen sizes.
      </p>
    ),
    overview: [
      {
        linkProject: 'https://trimman.netlify.app/register',
        linkCode: 'https://github.com/SerhiySk/HTML-CSS-form',
        text: () => (
          <p>
            By taking advantage of the latest technologies in web development,
            this form is accessible for users on any device.
          </p>
        ),
        list: ['CSS | HTML'],
      },
    ],
  },
];
export const skills = [
  {
    area: 'front end',
    icon: iconFrontEnd,
    items: ['react.js', 'javascript', 'HTML&CSS'],
  },
  {
    area: 'back end',
    icon: iconBackEnd,
    items: ['node.js', 'express.js'],
  },
  {
    area: 'database',
    icon: iconDatabase,
    items: ['MongoDB', 'Mongoose'],
  },

  {
    area: 'others',
    icon: iconOthers,
    items: [
      'redux | styled-comp',
      'stripe | googleAPI',
      'firebase | auth0',
      'git | netlify | render',
    ],
  },
];

// {
//   description: `
//   Take the stress out of your web development projects with my front-end expertise in React.js, HTML/CSS/Javascript and more!

//  I create impeccable websites and applications with seamless integration of features such as Redux and Stripe payments.

//  Let me do all the hard work for you so that you don't have to worry about it yourself.

//  I work on API integration as well, specifically engineering solutions that will allow for seamless and secure integration of APIs into websites and applications.`,
//   service: 'web development',
//   Icon: FaCode,
// },
// {
//   description:
//     'With my design services, I create visually appealing and intuitive user experiences for my clients. I specialize in implementing responsive web designs with CSS and styled-components to ensure compatibility across different devices and platforms. My designs are modern, clean, and optimized for the best user experience possible. I have a keen eye for detail, enabling me to craft high-quality designs that achieve the desired goals of my clients.',
//   service: 'web design',
//   Icon: FaSketch,
// },
// {
//   description: `As a seasoned developer, I possess a unique set of skills that allow me to craft robust backend solutions using Node.js and Express, leveraging the power of MongoDB databases and the Mongoose library to create APIs that can effectively handle intricate text responses, checkout requests, and authorization workflows with ease. Whether it's building an API from the ground up or enhancing an existing one, I am confident in my ability to deliver results that exceed expectations and drive business success
// .    `,
//   service: 'API development',
//   Icon: FaAndroid,
// },
