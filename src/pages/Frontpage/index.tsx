import React from "react";

import {
  GrTwitter,
  GrGithub,
  GrLinkedinOption,
  GrSpotify,
  GrMail,
} from "react-icons/gr";

import {
  Wrapper,
  Links as SocialLinks,
  Link as SocialLink,
  AboutMe,
  InfoContainer,
  TechsContainer,
  Skills,
} from "./styles";
import AboutMeSection from "./components/AboutMe/AboutMeSection";
import MyFocusSection from "./components/MyFocus/MyFocusSection";
import Profile from "../../assets/profile.png";

const Frontpage: React.FC = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <header>
          <img src={Profile} alt="Profile" />
          <h1>Arthur Soares</h1>
          <h2>Software Enginner</h2>
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
              <a href={"mailto:arthur.mts@gmail.com"}>
                <GrMail />
              </a>
            </SocialLink>
          </SocialLinks>
        </header>
      </InfoContainer>
      <TechsContainer>
        <AboutMe>
          <h2>About me</h2>
          <AboutMeSection />
        </AboutMe>

        <Skills>
          <h2>My focus is</h2>
          <MyFocusSection />
        </Skills>
      </TechsContainer>
    </Wrapper>
  );
};

export default Frontpage;
