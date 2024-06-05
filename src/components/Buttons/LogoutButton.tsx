import React, { useContext } from 'react';
import { ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';

const LogoutButton: React.FC = () => {
    const { logout } = useContext(AuthContext) || { logout: () => {} };

    const handleLogout = () => {
        logout();
    };

    return (
        <ListItem button onClick={handleLogout}>
            <ListItemIcon>
                <Logout color='primary' />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    );
};

export default LogoutButton;