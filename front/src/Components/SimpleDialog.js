import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import EmployeeSchedule from '../Components/EmployeeSchedule'

export default function SimpleDialog(props) {
    const handleClose = () => {
        props.onClose();
    };

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>Informações Pessoais do Servidor</DialogTitle>
            <Box sx={{ flexGrow: 1, marginLeft: 2 }} style={{marginBottom:"16px"}}>
				<Grid container spacing={1}>
                    <Grid item xs={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Avatar alt={props.item.name} src={`https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/photo/${props.item['photo']}`} />
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
                        <EmailIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={11} style={{display:"flex", alignItems:"center"}}>
                        <span>{props.item.email}</span>
                    </Grid>
                    <Grid item xs={1} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <WorkIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={11} style={{display:"flex", alignItems:"center"}}>
                        <span>{props.item['job']}</span>
                    </Grid>
				</Grid>
                <EmployeeSchedule schedule={props.item.schedule} />
			</Box>
        </Dialog>
    );
}
