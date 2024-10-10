// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import DashboardPage from './pages/DashboardPage';
import Meses from './pages/Meses'; // Importa o componente Meses
import FinancialDashboard from './pages/FinancialDashboard'; // Importa o componente FinancialDashboard
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CadastroPage />} /> {/* Página inicial */}
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/investimentos" element={<div>Investimentos</div>} />  {/* Exemplo de página */}
                <Route path="/meses/:mes" element={<Meses />} /> {/* Rota dinâmica */}
                <Route path="/financial-dashboard" element={<FinancialDashboard />} /> {/* Corrigido para evitar duplicidade */}
                <Route path="/metas-financeiras" element={<div>Metas Financeiras</div>} />  {/* Exemplo de página */}
                <Route path="/meses" element={<div>Meses</div>} />  {/* Exemplo de página */}
            </Routes>
        </Router>
    );
}

export default App;
