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
import Typography from '@mui/material/Typography';

function Home(props) {

	return (
		<div className="Home" style={{ margin:"20px" }}>
			<Box sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant="h5" component="div">
					Índice de Servidores Públicos do Ministério X
				</Typography>
				<Grid container spacing={1}>
					<EmployeeList employees={props.employees}/>
				</Grid>
			</Box>
		</div>
	);
}

export default Home;
