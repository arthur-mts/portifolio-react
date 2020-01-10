import React from 'react';

// import { Container } from './styles';
import './style.css';
export default function About() {

  //const [colorProp, setColorProp] = useEffect();
  //const [percentProp, setPercentProp] = useEffect();
  const mapTechs = new Map();
  const techs = ["JavaScript", "Java","Python","Banco de Dados","HTML","NodeJS","Linux","Git/GitHub"];

  mapTechs.set("NodeJS", {color: "#8CC84C", percent: 60});
  mapTechs.set("JavaScript", {color: "#F7E018", percent: 60});
  mapTechs.set("Python",{color: "#3775A8", percent: 70});
  mapTechs.set("Java",{color: "#E82D2F", percent: 80});
  mapTechs.set("HTML",{color: "#EA6228", percent: 50});
  mapTechs.set("Linux",{color: "#E53B00", percent: 90});
  mapTechs.set("Banco de Dados",{color: "#32648D", percent: 60});
  mapTechs.set("Git/GitHub",{color: "#E94D32", percent: 80});


  return (
    <div className="aboutMe">
      <p>
        Meu nome é Arthur Mauricio Thomaz Soares, tenho 17 anos e estou no mundo da computação/informática desde 2016. Sou Técnico em Informática pelo IFPB Campus Esperança e ingressei no curso de Engenharia de Computação no presente ano de 2019. Curto programação WEB desde lá, porem sempre foquei na parte do BackEnd. Além disso, tenho experiência com C, Java, Python e algumas de suas respectivas tecnologias. Em resumo, um estudante buscando experiências e agregar conhecimento.
      </p>

      <h2>Habilidades</h2>
      <ul>
        {techs.map((tech,i) => {
          const {color, percent} = mapTechs.get(tech);
          console.log(color, percent);
          //setColorProp(color);
          //setPercentProp(percent);
          return(
           <li key={i}>
           <div className="bar">
             <div className="progress" style={{backgroundColor: color, width: `${percent}%`}}></div>
           </div>
           <p>
             {tech}
           </p>
         </li>
          )
        })}
      </ul>
    </div>
  );
}
