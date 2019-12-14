import React from "react";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
import BigProjectCard from "./BigCard";
import testImg from "../assets/test.png";
import npmpackage from "../assets/npmpackage.png";
import soupb from "../assets/soupb.png";
import shop from "../assets/shop-phones.png";
import animation from "../assets/animation.png";
import {
  ProjectsWrapper,
  CardsWrapper,
  TextWrap,
  CardGrid
} from "./ProjectStyles";
import Particles from "../Particles/index";
import niyonUrl from "../assets/niyonURL.png";
import unsilencedURL from "../assets/unsilencedURL.png";
import GeoappURL from "../assets/geoappURL.png";
import Card from "./Card";

const Projects = () => {
  return (
    <Element name="Projects">
      <Particles />
      <ProjectsWrapper>
        <TextWrap>
          <ul>
            <li>P</li>
            <li>R</li>
            <li>O</li>
            <li>J</li>
            <li>E</li>
            <li>C</li>
            <li>T</li>
            <li>S</li>
          </ul>
        </TextWrap>
        <CardGrid>
          <Card
            deployment="https://niyonapp.com/"
            gitHubLink="https://github.com/labseu2-niyon"
            title="Niyon"
            text="Niyon is an online platform that aims to connect young coders with mentors."
            point1="Implemented user authentication on frontend using JWT, Redux Persist to gather user information across multiple pages and chat functionality using socket.io"
            point2="Construct and design components for authentication, chat and edit profile in React. Managing application state using Redux"
            background="darkblue"
            backgroundImg={niyonUrl}
            video="https://www.youtube.com/watch?v=4YFwmw08nzA&amp=&feature=youtu.be"
          />
          <Card
            deployment="https://unsilenced.space/"
            gitHubLink="https://github.com/unsilenced-project"
            title="Unsilenced"
            text="Comments disabled? Not anymore. Take back the conversation with your
          own Unsilenced Space"
            point1="Design RESTful backend server using Node and Express with a SQLite database. Implemented user authentication with JWT (backend+frontend)."
            point2="Build and design RESTful API endpoints and multiple React components from scratch using styled-components."
            backgroundImg={unsilencedURL}
          />
          <Card
            deployment="https://geoapp-mbc2dr3be.now.sh"
            gitHubLink="https://github.com/SorinC6/GeoApp"
            title="GeoApp"
            point2="Worked with Express.js, MongoDB, GraphQL, Apollo Client,Google OAuth2, Cloudinary API, MapBox"
            text="Live geolocation application where users can 'pin' di􏰀erent locations on the map."
            point1="implemented React Context API to manage the state, bulding the design using material Ui library in React."
            backgroundImg={GeoappURL}
          />
        </CardGrid>

        <CardsWrapper>
          <ProjectCard
            img={npmpackage}
            title="NPM Package"
            description="Error-Express-Handler is a easy middleware with build in errors messages for the most commun http errors in an express application. Using this package the user no longer have to put the code status and the message for the error"
            link="https://www.npmjs.com/package/error-express-handler"
            gitHubLink="https://github.com/SorinC6/error-handler-express"
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
