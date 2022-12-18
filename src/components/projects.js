import React from 'react';
import Project from './project';

import prevTheStorePNG from '../img/thestore-prev.png';
import prevTheStoreWEBP from '../img/thestore-prev.webp';
import prevNordiqPNG from '../img/nordiq-prev.png';
import prevNordiqWEBP from '../img/nordiq-prev.webp';
import prevCountriesPNG from '../img/countries-prev.png';
import prevCountriesWEBP from '../img/countries-prev.webp';
import prevPortfolioPNG from '../img/portfolio-prev.png';
import prevPortfolioWEBP from '../img/portfolio-prev.webp';

const myProjects = [
  // {
  //   name: 'theStore (WIP)',
  //   caption: 'E-commerce front-end',
  //   description:
  //     'theStore is a mock e-commerce site utilizing local storage, React Routing and the Fake Store API. The user can add and remove items to and from the wishlist and the basket, as well as seeing more detailed descriptions about the individual products, this is all saved for when the user returns to the site.',
  //   tech: ['HTML', 'SCSS', 'React', 'Fake Store API', 'Local Storage'],
  //   features: ['Product filtering', 'Routing', 'Quick + Responsive'],
  //   previews: {
  //     png: prevTheStorePNG,
  //     webp: prevTheStoreWEBP,
  //   },
  //   links: {
  //     code: 'https://github.com/HollosJ/the-store/tree/master',
  //     live: 'https://hollosj.github.io/the-store/',
  //   },
  //   inProgress: true,
  // },
  {
    name: 'React Countries',
    caption: 'Country Data application',
    description:
      "React Countries is a web app that utilizes the RESTCountries API to provide users with data on a specific country, including currency, language, capital, and flag. The app also includes a 'skeleton loading' effect. I am familiar with this API, due to using it in a previous project.",
    tech: ['HTML', 'CSS', 'ReactJS', 'REST API', 'Router DOM'],
    features: [
      'RESTCountries API',
      'Skeleton Loading',
      'Live search',
      'Responsive',
    ],
    previews: {
      png: prevCountriesPNG,
      webp: prevCountriesWEBP,
    },
    links: {
      code: 'https://github.com/HollosJ/country-api/tree/master',
      live: 'https://hollosj.github.io/country-api',
    },
    inProgress: false,
  },
  {
    name: 'Nordiq Travel Agency',
    caption: 'Landing page for mock travel agency',
    description:
      'Nordiq is a mock travel agency I created as an introduction to Sass Partials, as well as the Gulp workflow - minifying images, code and compiling Sass into a production-ready build.',
    tech: ['HTML', 'SCSS', 'JavaScript', 'Gulp.js'],
    features: ['Sass Partials', 'Responsive', 'Minified'],
    previews: {
      png: prevNordiqPNG,
      webp: prevNordiqWEBP,
    },
    links: {
      code: 'https://github.com/HollosJ/nordiq-travel',
      live: 'https://hollosj.github.io/nordiq-travel/',
    },
    inProgress: false,
  },
  {
    name: 'Portfolio',
    caption: "The portfolio you're currently viewing",
    description:
      'This is the portfolio you are currently viewing. It is a single-page application built using React and Tailwind CSS, utilizing Framer Motion for the animated modal.',
    tech: ['HTML', 'Tailwind CSS', 'ReactJS', 'Framer Motion'],
    features: ['Animated Modal', 'Responsive'],
    previews: {
      png: prevPortfolioPNG,
      webp: prevPortfolioWEBP,
    },
    links: {
      code: 'https://github.com/HollosJ/portfolio/tree/master',
      live: '#',
    },
    inProgress: true,
  },
];

const Projects = () => {
  return (
    <div className="grid gap-4">
      <h1 className="header">Projects</h1>

      <div className="grid gap-2 md:gap-6 md:grid-cols-2">
        {myProjects.map((project, key) => {
          return <Project key={key} project={project} tabIndex={key} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
