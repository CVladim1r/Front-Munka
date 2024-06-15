import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Box, Divider, Typography} from '@mui/material';
import { Home, Assessment, Contacts, Person, Work, Money, PersonSearch, MarkAsUnread, Markunread } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutButton from '../Buttons/LogoutButton.tsx';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary:{
            main:'#D0B1A3'
        }
    },
});

const Navbar: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius:'20px', width:'290px', height:'1152px',display:'inline-block'}}>
                <Typography sx={{color:'#E19C59', margin:'54px 136px 48px 54px', fontSize:'26px'}}><strong>MUNKA</strong></Typography>
                <Divider variant='fullWidth' sx={{marginBottom:'40px'}}></Divider>
                <List component="nav" sx={{marginLeft:'35px'}}>
                    <ListItem button component={Link} to="/dashboard/main">
                        <ListItemIcon>
                            <Home color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Главная" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/contacts">
                        <ListItemIcon>
                            <Contacts color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Контакты" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/analytics">
                        <ListItemIcon>
                            <Assessment color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Аналитика" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/vacancies">
                        <ListItemIcon>
                            <PersonSearch color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Вакансии" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/responses">
                        <ListItemIcon>
                            <Markunread color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Отклики" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/tariffs">
                        <ListItemIcon>
                            <Money color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Тарифы" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/profile">
                        <ListItemIcon>
                            <Person color="secondary"/>
                        </ListItemIcon>
                        <ListItemText primary="Профиль" />
                    </ListItem>
                    <LogoutButton/>
                </List>
            </Box>
        </ThemeProvider>
    );
};

export default Navbar;
