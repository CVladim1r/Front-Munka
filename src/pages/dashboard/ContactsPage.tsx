import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const ContactsPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    { 'only contacts (buy and view or download)' }
                </Typography>
            </Box>
        </Container>
    );
};

export default ContactsPage;
