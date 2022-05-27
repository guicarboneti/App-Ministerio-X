import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { capitalize } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
return { name, calories, fat, carbs, protein };
}

const rows = [
createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
createData('Eclair', 262, 16.0, 24, 6.0),
createData('Cupcake', 305, 3.7, 67, 4.3),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        // color: theme.palette.common.white,
        border: "1px solid gray",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function EmployeeSchedule(props) {
return (
    <div>
    <ul>
    {props.schedule.mon.map(item => (
    	// <p>{item['09h'].duration}</p>
        <p>{Object.keys(item)[0]}</p>
    ))}
    </ul>
    {/* <h1>{props.schedule.mon[0]['11h00']['duration']}</h1> */}
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center" colSpan={3}>Monday</StyledTableCell>
                    <StyledTableCell align="center" colSpan={3}>Tuesday</StyledTableCell>
                    <StyledTableCell align="center" colSpan={3}>Wednesday</StyledTableCell>
                    <StyledTableCell align="center" colSpan={3}>Thursday</StyledTableCell>
                    <StyledTableCell align="center" colSpan={3}>Friday</StyledTableCell>
                </TableRow>
                <TableRow>
                    <StyledTableCell align="center">Time</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Duration</StyledTableCell>
                    <StyledTableCell align="center">Time</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Duration</StyledTableCell>
                    <StyledTableCell align="center">Time</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Duration</StyledTableCell>
                    <StyledTableCell align="center">Time</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Duration</StyledTableCell>
                    <StyledTableCell align="center">Time</StyledTableCell>
                    <StyledTableCell align="center">Description</StyledTableCell>
                    <StyledTableCell align="center">Duration</StyledTableCell>
                </TableRow>
            </TableHead>
            {/* <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <StyledTableCell component="th" scope="row" align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.calories}</StyledTableCell>
                    <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="center">{row.protein}</StyledTableCell>
                    </TableRow>
                ))}
            </TableBody> */}
            <TableBody>
                {props.schedule.mon.forEach((item) => {
                    <StyledTableCell component="th" scope="row" align="center">{console.log(item)}</StyledTableCell>
                    // Object.values(item).map((clk, clkId) => (
                    //     <StyledTableCell component="th" scope="row" align="center">{clk}</StyledTableCell>
                    //     // console.log(clkId)
                    // ))
                    // <StyledTableCell component="th" scope="row" align="center">{Object.keys(item)[0]}</StyledTableCell>
                    // item.map((clk) => (
                    //     <TableRow
                    //     // key={Object.keys(item[0])[0]}
                    //     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    //     >
                    //         <StyledTableCell component="th" scope="row" align="center">{Object.keys(clk)[0]}</StyledTableCell>
                    //         {/* <StyledTableCell align="center">{row.calories}</StyledTableCell>
                    //         <StyledTableCell align="center">{row.fat}</StyledTableCell>
                    //         <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                    //         <StyledTableCell align="center">{row.protein}</StyledTableCell> */}
                    //     </TableRow>
                    // ))
                })}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
);
}
