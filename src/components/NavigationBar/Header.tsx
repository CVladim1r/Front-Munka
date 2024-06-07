import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar } from '@mui/material';
import { Search, Notifications, Info } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

// Создаем тему
const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    }
});

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="absolute" color="primary" style={{
                    width: 340,
                    display:'flex',
                    height: 60,
                    backgroundColor: '#fff',
                    marginTop: 50,
                    paddingBottom: '20px',
                    borderRadius: '30px', 
                    marginLeft:'0'}}>
                <Toolbar>
                    <div style={{ flexGrow: 1, display:'flex'}}>
                        <IconButton type="submit" aria-label="search">
                            <Search />
                        </IconButton>
                        <InputBase
                            placeholder="search…"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ backgroundColor: '#fef8f4', padding: '0 10px', borderRadius: 22, width: 140, height: 42 }}
                        />
                    </div>
                    <IconButton aria-label="show new notifications" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="info" color="inherit">
                        <Info />
                    </IconButton>
                    <Avatar alt="profile picture" src="/static/images/avatar/1.jpg" />
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
