import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SimpleDialog from '../Components/SimpleDialog';
import StarIcon from '@mui/icons-material/Star';

export default function EmployeeList(props) {
    
    const [open, setOpen] = React.useState(false);
    const [ singleItem, setSingleItem ] = React.useState({})

    const handleClickOpen = (item) => {
        setSingleItem(item);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    var ministro = props.employees.filter((item => item.job=="Ministro X"));
    var servidores = props.employees.filter((item => item.job!="Ministro X"));

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                {ministro.map((item) => (
                    <div>
                        <ListItem button alignItems="flex-start" onClick={() => {
                            handleClickOpen(item);
                        }}>
                            <ListItemAvatar>
                                <Avatar style={{ border: "solid orangeRed 3px" }} alt={item.name} src={`https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/photo/${item['photo']}`} />
                            </ListItemAvatar>
                            <ListItemText style={{marginTop:"20px", textDecoration: "underline"}} root primary={item.name + " " + item.surname} />
                            <StarIcon style={{marginTop:"18px", marginLeft:"4px"}} />
                        </ListItem>
                        <Divider component="li" />
                    </div>
                ))}
                {servidores.map((item) => (
                    <div>
                        <ListItem button alignItems="flex-start" onClick={() => {
                            handleClickOpen(item);
                        }}>
                            <ListItemAvatar>
                                <Avatar style={{ border: "solid black 2px" }} alt={item.name} src={`https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/photo/${item['photo']}`} />
                            </ListItemAvatar>
                            <ListItemText style={{marginTop:"20px"}} primary={item.name + " " + item.surname} />
                        </ListItem>
                        <Divider component="li" />
                    </div>
                ))}
            </List>
            <SimpleDialog
                onClose={handleClose}
                open={open}
                item={singleItem}
            />
        </div>
    );
}
