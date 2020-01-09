import React from 'react';

// import { Container } from './styles';
import './style.css';

export default function Projects() {
    return (
        <>
            <ul className="repoList">
                <li>
                    <h4>
                        <a href="https://github.com/punisher077/beijo-de-moca" className="mainLink">
                            beijo-de-moca</a>
                    </h4>

                    <p>Tem o objetivo de gerar interpreções sobre os gastos públicos suspeitos feitos por deputados e senadores com
                    dados disponibilizados pelo Jarbas, um site onde é possível navegar pelos gastos e descobrir mais sobre cada suspeita, de maneira simples e descomplicada.</p>

                    <ul className="techs">
                        <li>Pandas</li>
                        <li>Analise de dados</li>
                        <li>Python</li>

                    </ul>
                </li>


                <li>
                    <h4>
                        <a href="https://github.com/punisher077/league-viwer" className="mainLink">
                            league-viwer</a>
                    </h4>
                    <p>Um cliente para visualizar sua conta do League of Legends feito em Python para a o projeto da disciplina de Algoritmos. Salve seu login e verifique suas estatisticas em Summoners Rift e Howling Abyss.</p>

                    <ul className="techs">
                        <li>Python</li>
                        <li>Tkinter para o Frontend</li>
                        <li>Riot Games API</li>
                        <li>HTTP requests</li>
                    </ul>
                </li>

                <li>
                    <h4>
                        <a href="https://github.com/punisher077/Escola" className="mainLink">
                            Escola</a>
                    </h4>

                    <p>Projeto de gerenciamento de alunos, professores, matricula e disciplinas para a discipina de DAW (Desenvolvimento de aplicações WEB 2) do curso Técnico em Informatica. Um sistema WEB com autenticação, presistência no banco de dados e estilização.</p>

                    <ul className="techs">
                        <li>Java</li>
                        <li>JavaServer Faces</li>
                        <li>Primefaces</li>
                        <li>PostgreSQL</li>
                        <li>Criptografia de senhas e autenticação</li>
                    </ul>
                </li>

                <li>
                    <h4>
                        <a href="https://github.com/punisher077/ED-Repo" className="mainLink">
                            ED-Repo</a>
                    </h4>

                    <p>Repositório para questões de Estrutura de Dados do segundo período de Engenharia de Computação</p>

                    <ul className="techs">
                        <li>C</li>
                    </ul>
                </li>


                <li>
                    <h4>
                        <a href="http://lattes.cnpq.br/8728826313945150" className="mainLink">
                            O PROBLEMA DA PRIVACIDADE NA FILOSOFIA DA INFORMAÇÃO</a>
                    </h4>

                    <p>Projeto de pesquisa realizado no Campus Esperança orientado pelo professor Mestre <a href="http://lattes.cnpq.br/7291661662684268"> Cleyton Leandro Galvão</a></p>

                    <ul className="techs">
                        <li>

                            I ENCONTRO INSTITUCIONAL MENTE, TECNOLOGIA INFORMAÇÃO. 2016</li>

                        <li>
                            SIMPIF-Simpósio de Pesquisa, Inovação e Pós-Graduação.
                        </li>

                        <li>

                            II Semana do Meio Ambiente do IFPB Campus Esperança. 2017
                        </li>
                    </ul>
                </li>

            </ul>
        </>
    );
}
