import React from 'react';
import './App.css';

function App() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
        };

        fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gray-200 flex flex-col justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-center text-xl font-semibold mb-6">Personal Finance</h2>
                    <div className="mb-4">
                        <span className="text-sm font-semibold">Cadastro</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Primeiro nome" className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Sobrenome" className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="email" placeholder="E-mail" className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="password" placeholder="Crie uma senha" className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button type="submit" className="w-full bg-blue-900 text-white p-3 rounded-lg font-semibold">Criar uma conta</button>
                    </form>
                </div>
            </div>
            <div className="w-1/2 bg-blue-900 flex justify-center items-center">
                <img src="/finance.gif" alt="Animated GIF" className="w-3/4" />
            </div>
        </div>
    );
}

export default App;
