import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const ProfilePage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    { 'Jon Doe - это Вовка' }
                </Typography>
            </Box>
        </Container>
    );
};

export default ProfilePage;
