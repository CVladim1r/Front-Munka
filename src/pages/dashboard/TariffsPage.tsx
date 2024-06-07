import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const TariffsPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    { 'Цена - 500000000$' }
                </Typography>
            </Box>
        </Container>
    );
};

export default TariffsPage;
