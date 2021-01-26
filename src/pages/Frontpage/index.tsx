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
  JSIcon,
  ReactIcon,
  NodeIcons,
  LaravelIcon,
} from "./styles";
import AboutMeSection from "./components/AboutMe/AboutMeSection";
import MyFocusSection from "./components/MyFocus/MyFocusSection";

const Frontpage: React.FC = () => {
  function getSubtitleHtml() {
    return {
      __html: process.env.REACT_APP_PREV_SUBTITLE || "",
    };
  }
  return (
    <Wrapper>
      <InfoContainer>
        <header>
          <h1>{process.env.REACT_APP_FULL_NAME}</h1>
          <h2 dangerouslySetInnerHTML={getSubtitleHtml()} />
          <SocialLinks>
            {!!process.env.REACT_APP_SOCIAL_TWEETER_LINK && (
              <SocialLink>
                <a href={process.env.REACT_APP_SOCIAL_TWEETER_LINK}>
                  <GrTwitter />
                </a>
              </SocialLink>
            )}
            {!!process.env.REACT_APP_SOCIAL_GITHUB_LINK && (
              <SocialLink>
                <a href={process.env.REACT_APP_SOCIAL_GITHUB_LINK}>
                  <GrGithub />
                </a>
              </SocialLink>
            )}
            {!!process.env.REACT_APP_SOCIAL_LINKEDIN_LINK && (
              <SocialLink>
                <a href={process.env.REACT_APP_SOCIAL_LINKEDIN_LINK}>
                  <GrLinkedinOption />
                </a>
              </SocialLink>
            )}
            {!!process.env.REACT_APP_SOCIAL_SPOTIFY_LINK && (
              <SocialLink>
                <a href={process.env.REACT_APP_SOCIAL_SPOTIFY_LINK}>
                  <GrSpotify />
                </a>
              </SocialLink>
            )}
            {!!process.env.REACT_APP_SOCIAL_EMAIL_ADDRESS && (
              <SocialLink>
                <a href={`mailto:${process.env.REACT_APP_SOCIAL_EMAIL_ADDRESS}`}>
                  <GrMail />
                </a>
              </SocialLink>
            )}
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
