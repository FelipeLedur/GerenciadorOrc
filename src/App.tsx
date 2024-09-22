import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import './styles/App.css';
import { TransactionProvider } from './TransactionContext'; // Importando o provedor


const App: React.FC = () => {
  return (
    <TransactionProvider>

    <Router>
      <div>
        {/* Menu de navegação */}
        <Navbar />
        
        {/* Rotas */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </TransactionProvider>

  );
};

export default App;
