import React, { useEffect, useRef } from "react";
import { getUserRepos } from "../../../../services/github";

import { Container } from "./styles";

function Projects(): JSX.Element {
  const projects = useRef([]);

  useEffect(() => {
    (async function getData() {
      const res = await getUserRepos();
      console.log(res);
      projects.current = res;
    })();
  }, []);

  return (
    <Container>
      <p>Hello</p>
    </Container>
  );
}

export default Projects;
