import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
    <h1>Gerenciador de Orcamento</h1>
    <p>
        O nosso gerenciador de orçamento é uma ferramenta prática e intuitiva que permite a você controlar suas finanças pessoais de forma simples e eficiente.
    </p>
    <h2>Como Funciona?</h2>
    <p>
        Com o nosso gerenciador, você pode:
    </p>
    <ul>
        <li><strong>Registrar Entradas:</strong> Adicione todas as entradas na sua conta.</li>
        <li><strong>Registrar Despesas:</strong> Adicione todas as saidas na sua conta.</li>
        <li><strong>Visualizar Total da Renda:</strong>Verifique o saldo entre todas as entradas e saidas.</li>
    </ul>
</div>
  );
};

export default Home;
