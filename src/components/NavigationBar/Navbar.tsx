import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Box, Divider, Typography} from '@mui/material';
import { Home, Assessment, Contacts, Person, Work } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutButton from '../Buttons/LogoutButton.tsx';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    },
});

const Navbar: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: theme.palette.primary.main, borderRadius:'20px', width:'290px', height:'1152px',display:'inline-block'}}>
                <Typography sx={{color:'#E19C59', margin:'54px 136px 89px 54px', fontSize:'26px'}}><strong>MUNKA</strong></Typography>
                <List component="nav">
                    <ListItem button component={Link} to="/dashboard/main">
                        <ListItemIcon>
                            <Home color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Главная" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/analytics">
                        <ListItemIcon>
                            <Assessment color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Аналитика" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/contacts">
                        <ListItemIcon>
                            <Contacts color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Контакты" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/profile">
                        <ListItemIcon>
                            <Person color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary="Профиль" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/vacancies">
                        <ListItemIcon>
                            <Work color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Вакансии" />
                    </ListItem>
                    <LogoutButton />
                </List>
            </Box>
        </ThemeProvider>
    );
};

export default Navbar;
