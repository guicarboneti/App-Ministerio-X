import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EmployeeCard from '../Components/EmployeeCard';

function Home() {
    const buildCards = () => {
        var result
        for (let i=0;i<4;i++) {
            result += <Grid item xs={6}>
                <EmployeeCard cardnumber={i.toString()}/>
            </Grid>
        }
        return result
    }
  return (
    <div className="Home">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
          {buildCards()}
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
