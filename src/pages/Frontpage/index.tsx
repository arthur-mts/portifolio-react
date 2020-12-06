import React from "react";

import {
  GrTwitter,
  GrGithub,
  GrLinkedinOption,
  GrSpotify,
  GrMail,
} from "react-icons/gr";

import { AiOutlineMail } from "react-icons/ai";
import linus from "../../assets/linus.png";

import {
  Wrapper,
  Links as SocialLinks,
  Link as SocialLink,
  AboutMe,
  InfoContainer,
  TechsContainer,
  Skills,
  TSIcon,
  JSIcon,
  ReactIcon,
  NodeIcons,
  JavaIcon,
} from "./styles";

const Frontpage: React.FC = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <header>
          <h1>Arthur Mauricio Soares</h1>
          <h2>
            Computer Enginner, Computer Technician and <br /> Full Stack
            Developer
          </h2>
          <SocialLinks>
            <SocialLink>
              <a href="https://twitter.com/tucacipo">
                <GrTwitter />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="https://github.com/arthur-mts">
                <GrGithub />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="https://www.linkedin.com/in/arthur-mts/">
                <GrLinkedinOption />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="https://open.spotify.com/user/arthur.mts?si=E4cnWeT5S4aLdj6Y6tmWeA">
                <GrSpotify />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="mailto:arthur.mts@gmail.com">
                <GrMail />
              </a>
            </SocialLink>
          </SocialLinks>
        </header>
      </InfoContainer>
      <TechsContainer>
        <AboutMe>
          <h2>About me</h2>
          <p>
            Hello! My name is Arthur Mauricio Thomaz Soares and i am a software
            developer, computer technician, mediocre guitarist and lover of good
            music and black coffee.
          </p>

          <p>
            I live in the interior of Paraíba and I like that. Here I have fresh
            air, good friends, an amazing family, and the energy to do
            absolutely everything.
          </p>

          <p>
            But, <strong> talk is cheap show me the code </strong>
            <img src={linus} alt="Linus" />
            <br />I write some codes and love technology since 2016 at IFPB
            Esperança where i started{" "}
            <a href="#https://estudante.ifpb.edu.br/cursos/74/">
              Computer Technican Course
            </a>
            . There i learned Web Development Operational Systems and a bunch of
            other stuff about tech.
            <br />
            At 2019 after finish the technican course i entered{" "}
            <a href="#https://estudante.ifpb.edu.br/cursos/74/">
              Computer Engenieering Course
            </a>{" "}
            at IFPB Campina Grande and in 2020 i started working with web
            development and back-end development.
          </p>
        </AboutMe>

        <Skills>
          <h2>My focus is</h2>
          <ul>
            <li>
              <TSIcon />
              <p>Typescript</p>
            </li>
            <li>
              <JSIcon />
              <p>Javascript</p>
            </li>
            <li>
              <ReactIcon />
              <p>React</p>
            </li>
            <li>
              <NodeIcons />
              <p>NodeJS</p>
            </li>
            <li>
              <JavaIcon />
              <p>Java</p>
            </li>
          </ul>
        </Skills>
      </TechsContainer>
    </Wrapper>
  );
};

export default Frontpage;
