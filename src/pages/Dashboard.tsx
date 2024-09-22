import React from 'react';
import { useTransaction } from '../TransactionContext'; // Importando o hook do contexto
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { addTransaction, getTotalEntradas, getTotalDespesas } = useTransaction();

  const adicionarReceita = () => {
    const valor = prompt('Digite o valor da receita:');
    if (valor) {
      addTransaction({ id: Date.now(), type: 'receita', value: parseFloat(valor) });
    }
  };

  const adicionarDespesa = () => {
    const valor = prompt('Digite o valor da despesa:');
    if (valor) {
      addTransaction({ id: Date.now(), type: 'despesa', value: parseFloat(valor) });
    }
  };

  const totalEntradas = getTotalEntradas();
  const totalDespesas = getTotalDespesas();
  const saldo = totalEntradas - totalDespesas;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="boxes-container">
        <div className="box">
          <h2>Entradas</h2>
          <p>R$ {totalEntradas.toFixed(2)}</p>
        </div>
        <div className="box">
          <h2>Despesas</h2>
          <p>R$ {totalDespesas.toFixed(2)}</p>
        </div>
        <div className="box">
          <h2>Saldo</h2>
          <p>R$ {saldo.toFixed(2)}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={adicionarReceita}>Adicionar Receita</button>
        <button onClick={adicionarDespesa}>Adicionar Despesa</button>
      </div>
    </div>
  );
};

export default Dashboard;
