import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const ResponsivePage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    { 'Отклики' }
                </Typography>
            </Box>
        </Container>
    );
};

export default ResponsivePage;
