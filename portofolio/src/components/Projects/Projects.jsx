import React from "react";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
import testImg from "../assets/test.png";
import book from "../assets/book.png";
import soup from "../assets/soup.png";
import soupb from "../assets/soupb.png";
import shop from "../assets/shop-phones.png";
import { ProjectsWrapper, CardsWrapper } from "./ProjectStyles";

const Projects = () => {
  return (
    <Element name="Projects">
      <ProjectsWrapper>
        <h4>Portofolio</h4>
        <h5>Some of my Work so far</h5>
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
            img={testImg}
            title="Book Title"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
          <ProjectCard
            img={testImg}
            title="Book Title"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
        </CardsWrapper>
      </ProjectsWrapper>
    </Element>
  );
};

export default Projects;
