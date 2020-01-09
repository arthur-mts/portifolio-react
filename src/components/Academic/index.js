import React from 'react';

// import { Container } from './styles';
import './style.css';
import ifpbLogo from '../../img/ifpb-vertical.png';
export default function Academic() {
    return (
        <div>
            <ul className="listCursos">
                <li>
                <img src={ifpbLogo} alt="IFPB"  />

                    <div className="infoCurso">

                        <p>
                            <h3>Técnico em Informática</h3>
                            <h4>2016 - 2018</h4>
                        </p>

                        <p>
                            Desenvolve software, seguindo as especificações. Utiliza sistemas operacionais e bancos de
                             dados. Realiza testes de software, mantendo registros que possibilitem análises e refinamento dos resultados. Executa manutenção de softwares já em produção. Utiliza métodos e técnicas de engenharia de software para uma melhor organização, produtividade e garantia de qualidade. Desenvolve software que fazem uso de bancos de dados, interfaces gráficas e arquitetura cliente/servidor. Apoia atividades de treinamento e de suporte de software ao usuário.
                        </p>
                    </div>


                </li>

                <li>
                <img src={ifpbLogo} alt="IFPB"  />

                    <div className="infoCurso">
                        <p>
                            <h3>Engenharia de Computação</h3>
                            <h4>2019 - Hoje</h4>
                        </p>

                        <p>
                        O Bacharel em Engenharia de Computação ou Engenheiro de Computação atua na área de sistemas computacionais, seus respectivos equipamentos, programas e inter-relações. Em sua atividade, otimiza, planeja, projeta, especifica, adapta, instala, mantém e opera sistemas computacionais. Integra recursos físicos e lógicos necessários para o desenvolvimento de sistemas, equipamentos e dispositivos computacionais, tais como computadores, periféricos, equipamentos de rede, de telefonia celular, sistemas embarcados e equipamentos eletrônicos microprocessados e microcontrolados. Coordena e supervisiona equipes de trabalho; realiza pesquisa científica e tecnológica e estudos de viabilidade técnico-econômica; executa e fiscaliza obras e serviços técnicos; efetua vistorias, perícias e avaliações, emitindo laudos e pareceres. Em sua atuação, considera a ética, a segurança e os impactos sócio-ambientais.
                        </p>
                    </div>


                </li>
            </ul>
        </div >
    );
}
