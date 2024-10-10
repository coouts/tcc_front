// src/components/Sidebar.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [showMonths, setShowMonths] = useState(false);
    const sidebarRef = useRef(null); // Referência para o Sidebar

    const handleNavigation = (path) => {
        navigate(path);
        onClose();
    };

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    useEffect(() => {
        // Fechar o sidebar quando o mouse sai
        const handleMouseLeave = () => {
            onClose();
        };

        const sidebarElement = sidebarRef.current;
        if (sidebarElement) {
            sidebarElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (sidebarElement) {
                sidebarElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [onClose]);

    return (
        <div
            ref={sidebarRef}
            className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-64 border-r border-gray-300 bg-white`}
        >
            <div className="p-4 border-b border-gray-300 text-center text-black">
                <span>Personal Finance</span>
            </div>
            <ul className="divide-y divide-gray-300">
                <li
                    className="p-4 text-black cursor-pointer hover:bg-gray-200"
                    onClick={() => handleNavigation('/dashboard')}
                >
                    Dashboard
                </li>
                <li
                    className="p-4 text-black cursor-pointer hover:bg-gray-200"
                    onClick={() => handleNavigation('/investimentos')}
                >
                    Investimentos
                </li>
                <li
                    className="p-4 text-black cursor-pointer hover:bg-gray-200"
                    onClick={() => handleNavigation('/metas-financeiras')}
                >
                    Metas Financeiras
                </li>
                <li
                    className="p-4 text-black cursor-pointer hover:bg-gray-200"
                    onClick={() => setShowMonths(!showMonths)}
                >
                    <div className="flex justify-between items-center">
                        Meses
                        <i className={`fas fa-chevron-${showMonths ? 'down' : 'right'}`}></i>
                    </div>
                </li>
                {showMonths && (
                    <ul className="ml-6">
                        {months.map((month, index) => (
                            <li
                                key={index}
                                className="p-2 text-black cursor-pointer hover:bg-gray-200"
                                onClick={() => handleNavigation(`/meses/${month.toLowerCase()}`)}
                            >
                                {month}
                            </li>
                        ))}
                    </ul>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
