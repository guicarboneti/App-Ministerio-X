import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function EmployeeList(props) {
    // const [isLoading, setIsLoading] = useState(true);
    // const [selectedPerson, selectPerson] = useState({});
    // const selectPersonIndex = (index) => selectPerson(list[index]);
    // const [openModal, setOpenModal] = useState(false);
    // const toggleModal = () => setOpenModal(!openModal);
    return (
        // <ImageList>
        //     {props.list.map((item) => (
        //         <ImageListItem key="Subheader" cols={2}>
        //             <ListSubheader component="div">December</ListSubheader>
        //             <p>{ item.name }</p>
        //         </ImageListItem>
        //     ))}
        // </ImageList>
        // <ImageList>
        //     <ImageListItem key="Subheader" cols={2}>
        //         <ListSubheader component="div">Índice de servidores públicos do Ministério X</ListSubheader>
        //     </ImageListItem>
        //     {props.list.map((item) => (
        //         <ImageListItem key={item['photo file']}>
        //             <img
        //                 src={`https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/photo/${item['photo file']}`}
        //                 alt={item['photo file']}
        //                 loading="lazy"
        //             />
        //             <ImageListItemBar
        //                 title={item.name}
        //                 subtitle={item.surname}
        //                 actionIcon={
        //                 <IconButton
        //                     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
        //                     aria-label={`info about ${item.name}`}
        //                 >
        //                     <InfoIcon />
        //                 </IconButton>
        //                 }
        //             />
        //         </ImageListItem>
        //     ))}
        // </ImageList>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {props.list.map((item) => (
                    <div>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt={item.name} src={`https://www.inf.ufpr.br/hvehrenfried/Treinamento/Dados/photo/${item['photo file']}`} />
                            </ListItemAvatar>
                            <ListItemText style={{marginTop:"15px"}} primary={item.name + " " + item.surname} />
                        </ListItem>
                        <Divider component="li" />
                    </div>
                ))}
        </List>
    );
}
