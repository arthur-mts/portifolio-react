import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.section`
  height: 100vh;
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
      margin-bottom: 0;
      color: #c0c0c0;
      font-weight: 300;
      text-align: center;
    }
  }
`;

export const AboutMe = styled.section`
  ${flex}
  p + p {
    margin-top: 1rem;
  }
  p {
    max-width: 400px;
    font-size: 1rem;
    text-align: center;
    line-height: 1.5rem;
    margin: 0 2rem;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const Link = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    ${flex}
    font-size: 2rem;
  }
  a:hover {
    transition: transform 0.5s color;
    color: #ccc;
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
  margin-bottom: 2rem;
`;

export const TechsContainer = styled.section``;
