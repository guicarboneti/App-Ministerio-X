import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../CSS/EmployeeSchedule.css';

function getNumberRows(obj) {
    let day, max_n=0, length;
    for (day in obj) {
        length = Object.keys(obj[day][0]).length;
        if (max_n < length)
            max_n = length;
    }
    return max_n;
}

function getTime_i(obj, day, i) {
    let html = [];
    obj[day].forEach(function(time) {
        if (Object.keys(time).length > i) {
            html.push(
                <StyledTableCell className={"table"} component="th" scope="row">{Object.keys(time)[i]}</StyledTableCell>
            );
            html.push(
                <StyledTableCell className={"table"} aling="center">{Object.values(time)[i].description}</StyledTableCell>
            );
            html.push(
                <StyledTableCell className={"table"} aling="center">{Object.values(time)[i].duration}</StyledTableCell>
            );
        }
    })
    return html;
}

function loopDay(obj, i) {
    let html = [];
    let week = ["mon", "tue", "wed", "thu", "fri"];

    week.forEach(function(day) {
        if (obj[day]!=null && Object.values(obj[day][0])[i]!=null) {
                html.push (
                getTime_i(obj, day, i)
            )
        }
        else {
            html.push(
                <StyledTableCell className={"table"} align="center">-</StyledTableCell>
            );
            html.push(
                <StyledTableCell className={"table"} align="center">-</StyledTableCell>
            );
            html.push(
                <StyledTableCell className={"table"} align="center">-</StyledTableCell>
            );
        }
    })
    return html;
}

function loopRow(obj) {
    let day, i;
    let html = [];
    for (i=0;i<getNumberRows(obj);i++) {
        html.push(<TableRow
            key={Object.keys(obj)[i]}
        >
            {loopDay(obj, i)}
        </TableRow>);
    }
    return html;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 14,
        padding: 5,
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: theme.palette.grey['300'],
        fontSize: 12,
    },
    padding: 5,
    border: "1px solid gray",
}));

export default function EmployeeSchedule(props) {
    return (
        <div>
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
                <TableBody>
                    {loopRow(props.schedule)}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}