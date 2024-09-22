import React from 'react';
import './About.css';


const About: React.FC = () => {
  return (
    <div className="profile-container">
    <h1 className="name">Felipe Antunes Ledur</h1>
    <h2 className="profession">Trainee de TI</h2>
    <div className="bio">
        <p>Sou um Trainee de TI e estudante de Engenharia de Software, em busca de aprimorar minhas</p>
        <p>habilidades técnicas e contribuir para projetos inovadores. Estou sempre disposto a aprender novas</p>
        <p>tecnologias e colaborar com equipes multidisciplinares para desenvolver soluções eficazes.</p>
    </div>
    <a href="https://github.com/FelipeLedur" className="github-link" target="_blank" rel="noopener noreferrer">Meu GitHub</a>
</div>
  );
};

export default About;
