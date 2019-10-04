import React from "react";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
import BigProjectCard from "./BigCard";
import testImg from "../assets/test.png";
import book from "../assets/book.png";
import soup from "../assets/soup.png";
import soupb from "../assets/soupb.png";
import shop from "../assets/shop-phones.png";
import animation from "../assets/animation.png";
import { ProjectsWrapper, CardsWrapper } from "./ProjectStyles";

const Projects = () => {
  return (
    <Element name="Projects">
      <ProjectsWrapper>
        <h4>Portofolio</h4>
        <h5>Some of my Work so far</h5>
        <BigProjectCard
          deployment="https://niyonapp.com/"
          gitHubLink="https://github.com/labseu2-niyon"
          title="Niyon"
          text="Niyon is an online platform that aims to connect young coders with mentors. 
          Starting a job in a new location or new industry is extremely difficult. 
          Niyon helps young professionals increase their confidence skills, meet colleagues in a new location and find support to help them develop the skills needed for their coding career. Niyon will be launching a pilot of its mentorship platform in West Africa and aims to reduce the unemployment rate in those countries."
          background="#348FBB"
          video="https://www.youtube.com/watch?v=4YFwmw08nzA&amp=&feature=youtu.be"
        />
        <BigProjectCard
          deployment="https://unsilenced.space/"
          gitHubLink="https://github.com/unsilenced-project"
          title="Unsilenced"
          text="Comments disabled? Not anymore. Take back the conversation with your
          own Unsilenced Space. Add a simple link to your youtube video
          description to provide an enhanced viewing experience for your
          visitors, complete with comments. Moderated and unmoderated options
          available."
        />
        <BigProjectCard
          deployment="https://geoapp-mbc2dr3be.now.sh"
          gitHubLink="https://github.com/SorinC6/GeoApp"
          title="GeoApp"
          text="GeaApp is a live geolocation application where users can 'pin' different locations on the map and share their own content with other users in realtime to share pictures, reviews of the location and area, interact with other users by adding comments to their pins, and manage the pins they've created."
          background="purple"
        />
        <BigProjectCard
          deployment="https://www.npmjs.com/package/error-express-handler"
          gitHubLink="https://github.com/SorinC6/error-handler-express"
          title="NPM Package"
          text="Error-Express-Handler is a easy middleware with build in errors messages for the most commun http errors in an express application. Using this package the user no longer have to put the code status and the message for the error"
          background="darkblue"
        />
        <CardsWrapper>
          <ProjectCard
            img={book}
            title="Bookr"
            description="Pitch: Bookr is your source for all things Text Book. Picture the AirBNB of text books, a social platform for peer reviewed text books. "
            link="https://goofy-jang-012306.netlify.com/"
            gitHubLink="https://github.com/SorinC6/Book-Store-App"
          />
          <ProjectCard
            img={soup}
            title="I'll Serve Soup"
            description="Pitch: To help those who help feed and assist the less fortunate of our community by providing a way to better organize how they take in and manage perishable and non-perishable items."
            link="https://gifted-curie-c364f6.netlify.com/"
            gitHubLink="https://github.com/SorinC6/Serve-Soup-Frontend"
          />
          <ProjectCard
            img={soupb}
            title="I'll Serve Soup - Server Side"
            description="This is the back-end that I made for the I'll serve soup Client Side, which is part of Lambda School Build Week Project."
            link="https://kitchen-soup-backend.herokuapp.com"
            gitHubLink="https://github.com/i-ll-serve-soup/backend"
          />
          <ProjectCard
            img={shop}
            title="Phones Shop"
            description="Improve my React and Redux skills developing E-Commerce shop of mobile phones using React and Redux"
            link="https://infallible-liskov-5131f7.netlify.com/"
            gitHubLink="https://github.com/SorinC6/E-Commerce-App-React-Redux"
          />
          <ProjectCard
            img={animation}
            title="Animation with Styled Component"
            description="Experimenting with Css animation and Styled Components"
            link="https://naughty-pike-4d5a8f.netlify.com/"
            gitHubLink="https://github.com/SorinC6/CSS-Animation-with-React"
          />
          <ProjectCard
            img={testImg}
            title="Empty Card for future project"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
        </CardsWrapper>
      </ProjectsWrapper>
    </Element>
  );
};

export default Projects;
