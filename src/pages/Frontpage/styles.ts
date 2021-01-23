import { DiJava } from "react-icons/di";
import { DiLaravel } from "react-icons/di";
import { FaNodeJs, FaReact, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.section`
  ${flex}
  height: 100vh;
  margin: 0 2rem;
`;

export const Wrapper = styled.main`
  max-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;

  header {
    margin-bottom: 1rem;
    ${flex}
    h1 {
      font-weight: 400;
      text-align: center;
      margin-bottom: 0;
    }
    h2 {
      margin-top: 1rem;
      line-height: 2rem;
      margin-bottom: 0;
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 300;
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export const AboutMe = styled.div`
  h2 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    font-size: 1.5rem;
  }
  p + p {
    margin-top: 1rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    max-width: 700px;
    font-size: 1rem;
    text-align: left;
    line-height: 1.5rem;
    margin: 0;

    a {
      color: #f0f0f0;
      font-weight: 700;
      position: relative;
      display: inline-block;
    }

    a::after {
      content: "";
      display: block;
      width: 0px;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: #fff;
      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      opacity: 1;
    }

    a:hover::after {
      width: 100%;
    }
  }
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const Link = styled.li`
  a {
    color: ${({ theme }) => theme.colors.text};
    ${flex}
    font-size: 2rem;
  }
  a:hover {
    transition: transform 0.5s color;
    color: ${({ theme }) => theme.colors.hover};
  }
`;
export const Links = styled.ul`
  ${flex}
  flex-direction: row;
  list-style: none;
  padding: 0;

  li + li {
    margin-left: 32px;
  }
`;

export const TechsContainer = styled.section`
  ${flex}
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    div {
      width: 100%;
    }
    ${AboutMe} {
      p {
        max-width: 100%;
      }
      margin-bottom: 2rem;
    }
  }
`;

export const Skills = styled.div`
  margin-left: 1rem;
  h2 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
  }

  text-align: center;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      ${flex}
      padding: 1rem;
      width: 150px;
      p {
        margin: 0;
        margin-top: 16px;
      }
      svg {
        height: 32px;
        width: 32px;
      }
    }
  }
`;

const iconCSS = (color: string) => css`
  @media (min-width: 768px) {
    color: #ccc;
    &:hover {
      color: ${color};

      transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
`;

export const TSIcon = styled(SiTypescript)`
  color: #007acc;
  ${iconCSS("#007acc")}
`;

export const JSIcon = styled(SiJavascript)`
  color: #f0db4f;
  ${iconCSS("#f0db4f")}
`;

export const ReactIcon = styled(FaReact)`
  color: #61dbfb;
  ${iconCSS("#61dbfb")}
`;

export const NodeIcons = styled(FaNodeJs)`
  color: #3c873a;
  ${iconCSS("#3c873a")}
`;

export const JavaIcon = styled(DiJava)`
  color: #6e0101;
  ${iconCSS("#6e0101")}
`;

export const LaravelIcon = styled(FaLaravel)`
  color: #6e0101;
  ${iconCSS("#6e0101")}
`;
