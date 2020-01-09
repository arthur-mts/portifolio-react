import React from 'react';
import "./style.css";

// import { Container } from './styles';
import { FaGithubAlt, FaFacebookSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import profilePhoto from "../../img/profile_photo.jpeg"

export default function Info() {
  return (

    <div className="profile">

      <div className="profilePhoto">
        <img src={profilePhoto} alt="profile" className="profilePhoto" />
      </div>
      <div className="desc">
        <h3>
          Arthur Mauricio
      </h3>
        <ul>

          <li>
            Cursando Engenharia da Computação pelo IFPB-CG.
          </li>
          <li>
            Formado em TI pelo IFPB-Esperança.
          </li>
        </ul>

        <p>
          <FaGithubAlt />
          <a href="https://github.com/punisher077">https://github.com/punisher077</a>
        </p>

        <p>
          <FaFacebookSquare />
          <a href="https://www.facebook.com/arthurmtss">https://www.facebook.com/arthurmtss</a>
        </p>

        <p>
          <MdEmail />
          <a href="mailto: arthur.mts@gmail.com" >arthur.mts@gmail.com</a>
        </p>

      </div>



    </div >

  );
}
