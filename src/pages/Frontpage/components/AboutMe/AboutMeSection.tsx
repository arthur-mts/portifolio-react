import React from "react";
import linus from "../../../../assets/linus.png";

const AboutMeSection: React.FC = () => {
  return (
    <>
      <p>
        Hello! My name is Arthur Soares and i am a software
        enginner, computer technician, mediocre guitarist and lover of good
        music and black coffee.
      </p>

      <p>
        I live in the interior of Paraíba state in Brasil. Here I have fresh
        air, good friends, an amazing family, and the energy to do
        absolutely everything.
      </p>

      <p>
        But, <strong> talk is cheap show me the code </strong>
        <img src={linus} alt="Linus" />
        <br />I write code and study computer science since 2016 at IFPB
        Esperança where i enrolled in the{" "}
        <a href="https://estudante.ifpb.edu.br/cursos/74/">
          Computer Technican Course
        </a>
        . There i learned the basis of computer science, web development, operational systems and other things.
        <br />
        At 2019 after finish the technican course i enrolled at{" "}
        <a href="https://estudante.ifpb.edu.br/cursos/28/">
          Computer Engenieering Degree
        </a>{" "}, where i learned more deeply about programming, hardware and worked with real projects that can be found in my GitHub profile.</p>
        <p>
        I started to work with programming effectively in 2020 as a full-stack intern. In 2021 i started working for {" "}
        <a href="https://institucional.ifood.com.br/">
          iFood
        </a>, the biggest food-related tech company
        from America, where i work with backend development, high-demand services, resilient systems and a lot of other things. <br/>
        My biggest goal as a tech professional is to impact positively people around the world using technology and with this achieve my personal goals (support my family and live well basicaly).
      </p>
    </>
  );
}

export default AboutMeSection;