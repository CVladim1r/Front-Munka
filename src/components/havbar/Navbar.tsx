import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Munka
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          Settings
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
