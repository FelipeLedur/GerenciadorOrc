import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo a estrutura dos dados
interface Transaction {
  id: number;
  type: 'receita' | 'despesa';
  value: number;
}

// Definindo o contexto
interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  getTotalEntradas: () => number;
  getTotalDespesas: () => number;
}

// Criando o contexto
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

// Provedor do contexto
const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const getTotalEntradas = () => {
    return transactions
      .filter((t) => t.type === 'receita')
      .reduce((total, t) => total + t.value, 0);
  };

  const getTotalDespesas = () => {
    return transactions
      .filter((t) => t.type === 'despesa')
      .reduce((total, t) => total + t.value, 0);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, getTotalEntradas, getTotalDespesas }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Hook para usar o contexto
const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};

export { TransactionProvider, useTransaction };
