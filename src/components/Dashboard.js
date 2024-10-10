import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Importa o Sidebar

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar o sidebar
    const [selectedMonth, setSelectedMonth] = useState('Setembro'); // Estado para o mês selecionado

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Alterna entre abrir e fechar
    };

    // Lista de meses
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
        <div className="bg-blue-900 text-white min-h-screen">
            {/* Botão de hambúrguer */}
            <div className="flex justify-between items-center p-4 relative">
                <div className="flex items-center">
                    <button className="text-white text-2xl mr-4" onClick={toggleSidebar}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <select 
                        className="bg-white text-black p-2 rounded"
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
                <h1 className="text-2xl">Dashboard</h1>
                <button className="text-white text-2xl">
                    <i className="fas fa-user-circle"></i>
                </button>
            </div>

            {/* Sidebar Component */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Conteúdo do Dashboard */}
            <div className="p-4">
                <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="bg-white text-black p-4 rounded">
                        <p>Despesas</p>
                        <p className="text-xl">R$ 1.780,00</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded">
                        <p>Entradas</p>
                        <p className="text-xl">R$ 1.780,00</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded">
                        <p>Cartão de crédito</p>
                        <p className="text-xl">R$ 1.780,00</p>
                    </div>
                    <div className="bg-white text-black p-4 rounded">
                        <p>Cartão de débito</p>
                        <p className="text-xl">R$ 1.780,00</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded">
                        <h2 className="text-black mb-2">Despesas total por categoria</h2>
                        <img src="https://placehold.co/300x200?text=Pie+Chart" alt="Pie chart showing expenses by category" />
                    </div>
                    <div className="grid grid-rows-2 gap-4">
                        <div className="bg-white p-4 rounded">
                            <h2 className="text-black mb-2">Reserva 2024</h2>
                            <img src="https://placehold.co/300x200?text=Bar+Chart" alt="Bar chart showing reserve for 2024" />
                        </div>
                        <div className="bg-white p-4 rounded">
                            <h2 className="text-black mb-2">Dinheiro investido 2024</h2>
                            <img src="https://placehold.co/300x200?text=Bar+Chart" alt="Bar chart showing money invested for 2024" />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded">
                    <h2 className="text-black mb-2">Panorama anual</h2>
                    <img src="https://placehold.co/600x200?text=Line+Chart" alt="Line chart showing annual overview" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
