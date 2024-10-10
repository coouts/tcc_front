// src/pages/Meses.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Meses = () => {
    const { mes } = useParams(); // Pega o mês da URL
    const [sidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar o sidebar
    const [selectedMonth, setSelectedMonth] = useState(mes.charAt(0).toUpperCase() + mes.slice(1)); // Estado para o mês selecionado

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Array com os meses
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    return (
        <div className="bg-blue-900 min-h-screen">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />

            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <button 
                        className="text-white text-2xl" 
                        onClick={toggleSidebar}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="relative">
                        <select 
                            className="bg-white text-black py-2 px-4 rounded"
                            value={selectedMonth} 
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            {months.map((month, index) => (
                                <option key={index} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="text-white text-2xl">
                        <i className="fas fa-user-circle"></i>
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-4 text-center">
                    <h1 className="text-blue-900 text-2xl mb-4">{selectedMonth} - Detalhes Financeiros</h1>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded shadow">
                        <div className="flex justify-between items-center">
                            <span>Entradas</span>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="text-center mt-2">
                            <span>R$ 1.780,00</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div className="flex justify-between items-center">
                            <span>Saídas</span>
                            <i className="fas fa-coins"></i>
                        </div>
                        <div className="text-center mt-2">
                            <span>R$ 1.780,00</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div className="flex justify-between items-center">
                            <span>Cartão de crédito</span>
                            <i className="fas fa-credit-card"></i>
                        </div>
                        <div className="text-center mt-2">
                            <span>R$ 1.780,00</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span>Total de fixos:</span>
                        <span>R$ 1.780,00</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-100 p-4 rounded"></div>
                        <div className="bg-gray-100 p-4 rounded"></div>
                        <div className="bg-gray-100 p-4 rounded"></div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-center mb-2">
                        <span>Total cartão de crédito:</span>
                        <span>R$ 1.780,00</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-100 p-4 rounded"></div>
                        <div className="bg-gray-100 p-4 rounded"></div>
                        <div className="bg-gray-100 p-4 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meses;
