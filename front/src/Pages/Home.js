import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EmployeeCard from '../Components/EmployeeCard';
import EmployeeList from '../Components/EmployeeList';
import { blue } from '@mui/material/colors';
import api from './../api.js';
import { Button } from '@mui/material';
// import axios from 'axios'

function Home(props) {
	// const api = axios.create({
	// 	baseURL: 'https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/',
	// 	headers: {'Access-Control-Allow-Origin':'*'}
	// });

    // const buildCards = () => {
    //     const result = [];
    //     for (let i=0;i<4;i++) {
    //         result.push(
	// 			<Grid item xs={6}>
	// 				<EmployeeCard cardnumber={i.toString()}/>
	// 			</Grid>
	// 		);
    //     }
    //     return result
    // }

	// const getData = () => {
	// 	// Make a request for a user with a given ID
	// 	// axios.get('https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/servidores.json')
	// 	api.get('/servidores.json')
	// 	.then(function (response) {
	// 		// handle success
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		// handle error
	// 		console.log(error);
	// 	})
	// 	.then(function () {
	// 		// always executed
	// 	});
	// }

	return (
		<div className="Home" style={{ margin:"20px" }}>
			<Box sx={{ flexGrow: 1 }}>
				<h2>Índice de Servidores Públicos do Ministério X</h2>
				<Grid container spacing={1}>
					{/* {buildCards()} */}
					<EmployeeList employees={props.employees}/>
					{/* {getData()} */}
					{/* <Grid item xs={8}>
						<EmployeeCard cardnumber={'5'}/>
					</Grid>
					<Grid item xs={4}>
						<EmployeeCard/>
					</Grid>
					<Grid item xs={4}>
						<EmployeeCard/>
					</Grid>
					<Grid item xs={8}>
						<EmployeeCard/>
					</Grid> */}
				</Grid>
			</Box>
		</div>
	);
}

export default Home;
