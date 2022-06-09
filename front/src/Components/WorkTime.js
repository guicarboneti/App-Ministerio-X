import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function loopDays(begin, finish) {
    let html = [];
    let week = ["mon", "tue", "wed", "thu", "fri"];
    week.forEach(function(day) {
        if (begin[day] && finish[day]) {
            html.push(
                <StyledTableCell align="center">{begin[day]}</StyledTableCell>
            );
            html.push(
                <StyledTableCell align="center">{finish[day]}</StyledTableCell>
            );
        }
        else {
            html.push(<StyledTableCell align="center">-</StyledTableCell>)
            html.push(<StyledTableCell align="center">-</StyledTableCell>)        
        }
    })
    return html;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.white,
        fontSize: 14,
        padding: 0,
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: theme.palette.grey['300'],
        fontSize: 13,
        padding: 1,
    },
    // width: "10px",
    border: "1px solid gray",
}));

export default function WorkInício(props) {
    return (
        <TableContainer>
            <Table sx={{ maxWidth: 570, minWidth: 500 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{ backgroundColor: "rgb(0,0,50)" }} align="center" colSpan={2}>Segunda </StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "rgb(0,0,50)" }} align="center" colSpan={2}>Terça</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "rgb(0,0,50)" }} align="center" colSpan={2}>Quarta</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "rgb(0,0,50)" }} align="center" colSpan={2}>Quinta</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "rgb(0,0,50)" }} align="center" colSpan={2}>Sexta</StyledTableCell >
                    </TableRow>
                    <TableRow>
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Início</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Fim</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Início</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Fim</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Início</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Fim</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Início</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Fim</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Início</StyledTableCell >
                        <StyledTableCell style={{ backgroundColor: "#09084c" }} align="center">Fim</StyledTableCell >
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        <TableRow>
                            {loopDays(props.begin, props.finish)}
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}