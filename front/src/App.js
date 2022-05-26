// import './App.css';
import React, { useState, useEffect } from 'react'
import Home from './Pages/Home'

function App() {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/servidores.json";
        fetch(`${proxyurl}${url}`)
            .then((jsonData) => jsonData.json())
            .then((data) => {
                setIsLoading(false);
				console.log(data)
                setList(data);
				console.log(list)
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
				// {list.map(item => (
				// 	<p>{item.name}</p>
				// ))}
				// </ul>
				// <h1>{list[0]}</h1>
				<Home listFetch={list}/>
			)}
		</div>
	);
}

export default App;
