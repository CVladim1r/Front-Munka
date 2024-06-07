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
            <AppBar position="absolute" color="primary" sx={{boxShadow:'none'}}
            style={{
                    width: 340,
                    display:'flex',
                    height: 60,
                    backgroundColor: '#fff',
                    marginTop: 50,
                    paddingBottom: '20px',
                    borderRadius: '30px 0 0 30px', 
                    marginLeft:'0'}}>

                <Toolbar sx={{width:"210px"}}>
                    <div style={{ flexGrow: 1, display:'flex', backgroundColor: '#fef8f4',borderRadius:'49px'}}>
                        <IconButton type="submit" aria-label="search" color = 'primary'>
                            <Search />
                        </IconButton>
                        <InputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{  padding: '0 10px', borderRadius: 22, width: 140, height: 42, fontSize:'14px'}}
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
