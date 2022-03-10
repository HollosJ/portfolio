import React from 'react';
import Project from './project';
import prevTheStore from '../img/thestore-prev.png';
import prevNordiq from '../img/nordiq-prev.png';
import prevCountries from '../img/countries-prev.png';
import prevPortfolio from '../img/portfolio-prev.png';

const myProjects = [
  {
    name: 'theStore (WIP)',
    caption: 'E-commerce front-end',
    description:
      'theStore is a mock e-commerce site utilizing local storage, React Routing and the Fake Store API. The user can add and remove items to and from the wishlist and the basket, as well as seeing more detailed descriptions about the individual products, this is all saved for when the user returns to the site.',
    tech: ['HTML', 'SCSS', 'React', 'Fake Store API', 'Local Storage'],
    features: ['Product filtering', 'Routing', 'Quick + Responsive'],
    preview: prevTheStore,
    links: {
      code: 'https://github.com/HollosJ/the-store/tree/master',
      live: 'https://hollosj.github.io/the-store/',
    },
    inProgress: true,
  },
  {
    name: 'Nordiq Travel Agency',
    caption: 'Landing page for a mock travel agency',
    description:
      'Nordiq is a mock travel agency I created as an introduction to Sass Partials, as well as the Gulp workflow - minifying images, code and compiling Sass into a production-ready build.',
    tech: ['HTML', 'SCSS', 'JavaScript', 'Gulp.js'],
    features: ['Sass Partials', 'Responsive', 'Minified'],
    preview: prevNordiq,
    links: {
      code: 'https://github.com/HollosJ/nordiq-travel',
      live: 'https://hollosj.github.io/nordiq-travel/',
    },
    inProgress: false,
  },
  {
    name: 'React Countries',
    caption: 'Single-page application pulling data from RESTCountries API',
    description:
      'React Countries is an app built using the RESTCountries API. It allows the user to search for a country, and instantly get data belonging to that specific country, such as currency, language, capital and flag. This project was based on a project I had previously build in Vanilla JS; I used this as a project to get familiar with React',
    tech: ['HTML', 'CSS', 'ReactJS', 'REST API'],
    features: ['RESTCountries API', 'Live search', 'Responsive'],
    preview: prevCountries,
    links: {
      code: 'https://github.com/HollosJ/react-countries/tree/master',
      live: 'https://hollosj.github.io/react-countries/',
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
    preview: prevPortfolio,
    links: {
      code: 'https://github.com/HollosJ/portfolio/tree/master',
      live: '#',
    },
    inProgress: true,
  },
];

const Projects = () => {
  return (
    <div className="container max-w-4xl px-2 pb-8 mx-auto md:px-4">
      <h1 className="my-4 md:my-8 header">Projects</h1>
      <div className="grid gap-2 md:gap-6 md:grid-cols-2">
        {myProjects.map((project, key) => {
          return <Project key={key} project={project} tabIndex={key} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
