import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="Projects">
      {/* REACT COUNTRIES */}
      <Project
        name="War Cards"
        preview="https://i.imgur.com/73cgMId.png"
        fullimg="https://i.imgur.com/xpOsjY7.png"
        desc="War Cards is a site where the user can find short bullet-pointed key events from history, for example WW1 and WW2, as well as the Cold War."
        tech={["HTML", "SCSS", "ReactJS", "React Router", "JavaScript"]}
        notables={["Responsive", "Card slider", "React Routing", "Custom data"]}
        live="https://hollosj.github.io/war-cards"
        code="https://github.com/HollosJ/war-cards/tree/master"
      />
      <Project
        name="React Countries"
        preview="https://imgur.com/ssl1TbL.jpg"
        fullimg="https://i.imgur.com/X60g45S.png"
        desc="React Countries is an app build using the RESTCountries API. It allows the user to search for a country, and instantly get data belonging to that specific country, such as currency, language, capital and flag. This project was based on a project I had previously build in Vanilla JS; I learnt a lot by doing this project in React and I thoroughly enjoyed building it."
        tech={[
          "HTML",
          "CSS",
          "ReactJS",
          "JavaScript",
          "REST API",
          "FontAwesome Icons",
        ]}
        notables={["RESTCountries API", "Live Search", "Responsive"]}
        live="https://hollosj.github.io/react-countries/"
        code="https://github.com/HollosJ/react-countries/tree/master"
      />
      {/* RE-AUDI */}
      <Project
        name="Re-Audi | Audi UK Clone"
        preview="https://imgur.com/fXJHD26.jpg"
        fullimg="https://i.imgur.com/mDpUaPE.png"
        desc="Re-Audi is a clone of the Audi UK website. Since this was a clone, I was able to work from the original design of the site, following the same features such as hover effects, side-menu, button animations etc."
        tech={["HTML", "Sass/SCSS", "ReactJS", "JavaScript"]}
        notables={[
          "Responsive layout",
          "Custom CSS Grid",
          "Sass Partials",
          "Website Clone",
        ]}
        live="https://hollosj.github.io/re-audi/"
        code="https://github.com/HollosJ/re-audi/tree/master/src"
      />
      {/* PORTFOLIO */}
      <Project
        name="Portfolio"
        preview="https://imgur.com/GueowXa.jpg"
        fullimg="https://i.imgur.com/Lo9zzFB.png"
        desc="Building my portfolio in React was a very useful choice as it enabled me to pass all the project data you're currently reading as props."
        tech={[
          "HTML",
          "Sass/SCSS",
          "ReactJS",
          "React Tilt",
          "JavaScript",
          "Google Forms",
        ]}
        notables={["Responsive layout", "React Tilt JS"]}
        live="#"
        code="https://github.com/HollosJ/portfolio/tree/master/src"
      />
      {/* THE GALLERY */}
      <Project
        name="theGallery"
        preview="https://i.imgur.com/zpgUl7d.png"
        fullimg="https://i.imgur.com/7Ny0zSy.png"
        desc="This is a basic gallery site built using Bootstrap 4, and ColcadeJS - a masonry-layout library."
        tech={[
          "HTML",
          "Sass/SCSS",
          "Bootstrap 4",
          "Colcade.js",
          "JavaScript",
          "Gulp.js",
        ]}
        notables={[
          "Responsive layout",
          "Bootstrap",
          "FontAwesome",
          "Masonry image layout",
        ]}
        live="https://hollosj.github.io/the-gallery"
        code="https://github.com/HollosJ/the-gallery"
      />
      {/* NORDIQ */}
      <Project
        name="Nordiq Travel Agency"
        preview="https://imgur.com/D1klLEF.jpg"
        fullimg="https://i.imgur.com/NPTJDzb.png"
        desc="Nordiq is a site based on a 'fake' travel agency. This was used an introduction to Sass Partials, as well as the Gulp workflow - minifying images, code and compiling Sass into a production-ready build."
        tech={[
          "HTML",
          "Sass/SCSS",
          "JavaScript",
          "Gulp.js",
          "FontAwesome Icons",
        ]}
        notables={["Responsive layout", "Sass Partials"]}
        live="https://hollosj.github.io/nordiq-travel-agency/"
        code="https://github.com/HollosJ/nordiq-travel-agency"
      />
      {/* WEATHER APP */}
      <Project
        name="React Weather App"
        preview="https://imgur.com/a8KkcT8.jpg"
        fullimg="https://i.imgur.com/6IWyqgV.png"
        desc="This is a simple weather app built using the OpenWeatherMap API. The application features a dynamic background that changes based on the locations' current time, if at night, the background is darker. Data displayed features temperature, condition, wind speed and direction etc."
        tech={["HTML", "Sass/SCSS", "ReactJS", "JavaScript", "API"]}
        notables={[
          "Responsive layout",
          "OpenWeatherMap API",
          "Dynamic background",
        ]}
        live="https://hollosj.github.io/react-weather/"
        code="https://github.com/HollosJ/react-weather/tree/master/src"
      />
    </div>
  );
};

export default Projects;
