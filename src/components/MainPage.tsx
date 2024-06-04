import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to the Main Page
        </Typography>
      </Box>
    </Container>
  );
};

export default MainPage;
