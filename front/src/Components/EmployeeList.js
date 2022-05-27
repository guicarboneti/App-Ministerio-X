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
import { blue } from '@mui/material/colors';
import SimpleDialog from '../Components/SimpleDialog';

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

    // <ListItem style={{ cursor: cursor }} alignItems="flex-start" onClick={handleClickOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                {props.employees.map((item) => (
                    <div>
                        <ListItem button alignItems="flex-start" onClick={() => {
                            handleClickOpen(item);
                        }}>
                            <ListItemAvatar>
                                <Avatar alt={item.name} src={`https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/photo/${item['photo']}`} />
                            </ListItemAvatar>
                            <ListItemText style={{marginTop:"15px"}} primary={item.name + " " + item.surname} />
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
