import React from "react";
import linus from "../../../../assets/linus.png";

const AboutMeSection: React.FC = () => {
  return (
    <>
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
    </>
  );
}

export default AboutMeSection;