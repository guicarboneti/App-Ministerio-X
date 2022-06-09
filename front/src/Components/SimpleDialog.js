import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import EmployeeSchedule from './EmployeeSchedule';
import WorkTime from './WorkTime.js';
import Slide from '@mui/material/Slide';
import '../CSS/SimpleDialog.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SimpleDialog(props) {
    const handleClose = () => {
        props.onClose();
    };
    const email = props.item.email;
    const subject = "";
    const body = "";

    return (
        <Dialog TransitionComponent={Transition} onClose={handleClose} open={props.open}>
            <DialogTitle>Informações Pessoais do Servidor</DialogTitle>
            <Box sx={{ flexGrow: 1, marginLeft: 2 }} style={{marginBottom:"16px"}}>
				<Grid container spacing={1}>
                    <Grid item xs={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Avatar style={{ border: "solid black 2px" }} alt={props.item.name} src={`https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/photo/${props.item['photo']}`} />
                    </Grid>
                    <Grid item xs={11} style={{display:"flex", alignItems:"center"}}>
                        <span>{props.item.name + " " + props.item.surname}</span>
                    </Grid>
                    <Grid item xs={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <PhoneIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={11} style={{display:"flex", alignItems:"center"}}>
                        <span>{props.item.phone}</span>
                    </Grid>
                    <Grid item xs={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <PhoneForwardedIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={11} style={{display:"flex", alignItems:"center"}}>
                        <span>{props.item.extension}</span>
                    </Grid>
                    <Grid item xs={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
                            <EmailIcon style={{cursor:"pointer", color: "black"}} fontSize='large'/>
                        </a>
                    </Grid>
                    <Grid item xs={11} style={{display:"flex", alignItems:"center"}}>
                        <a style={{textDecoration: "none"}} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
                            <span style={{cursor:"pointer", color: "black"}}>{props.item.email}</span>
                        </a>
                    </Grid>
                    <Grid item xs={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <WorkIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={11} style={{display:"flex", alignItems:"center"}}>
                        <span>{props.item['job']}</span>
                    </Grid>
				</Grid>
                <h4 style={{ marginBottom: 7 }}>Horários que bateu ponto</h4>
                <WorkTime style={{margin: "50px"}} begin={props.item.begin} finish={props.item.finish} />
                <h4 style={{ marginBottom: 7 }}>Agenda da Semana</h4>
                <EmployeeSchedule style={{margin: "50px"}} schedule={props.item.schedule} />
			</Box>
        </Dialog>
    );
}
