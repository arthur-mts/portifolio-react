import React from "react";

import {
  GrTwitter,
  GrGithub,
  GrLinkedinOption,
  GrSpotify,
} from "react-icons/gr";
import linus from "../../assets/linus.png";
import {
  Wrapper,
  Links as SocialLinks,
  Link as SocialLink,
  AboutMe,
  InfoContainer,
  TechsContainer,
} from "./styles";

const Frontpage: React.FC = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <header>
          <h1>Arthur Mauricio Soares</h1>
          <h2>Computer Enginner, Computer Technician, Full Stack Developer</h2>
          <SocialLinks>
            <SocialLink>
              <a href="#a">
                <GrTwitter />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="#a">
                <GrGithub />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="#a">
                <GrLinkedinOption />
              </a>
            </SocialLink>
            <SocialLink>
              <a href="#a">
                <GrSpotify />
              </a>
            </SocialLink>
          </SocialLinks>
        </header>

        <AboutMe>
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
            <img src={linus} alt="Linus" />. <br />I write some codes and love
            technology since 2016 at IFPB where i started computer technican
            course. There i learned Web Development Operational Systems and a
            bunch of other stuff about tech and et cetera.
          </p>
        </AboutMe>
      </InfoContainer>
      <TechsContainer>
        <p>hello</p>
      </TechsContainer>
    </Wrapper>
  );
};

export default Frontpage;
