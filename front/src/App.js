// import './App.css';
import React, { useState, useEffect } from 'react'
import Home from './Pages/Home'

function App() {
	const [employees, setEmployees] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
        const proxyurl = "http://localhost:3001";
        // const url = "https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/servidores.json";
        const url = "/employees";
        fetch(`${proxyurl}${url}`)
            .then((jsonData) => jsonData.json())
            .then((data) => {
                setIsLoading(false);
                setEmployees(data);
            })
            .catch((err => {
                console.log("Erro: "+err);
            }));
    });

	return (
		<div className="App">
			{isLoading ? (
				<p>Loading ...</p>
			) : (
				// <ul>
				// {employees.map(item => (
				// 	<p>{item.name}</p>
				// ))}
				// </ul>
				// <h1>{employees[0]}</h1>
				<Home employees={employees}/>
			)}
		</div>
	);
}

export default App;
