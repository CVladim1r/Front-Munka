import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Assessment, Contacts, Person, Work } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import LogoutButton from '../Buttons/LogoutButton.tsx';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});

const Navbar: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
};

export default Navbar;
