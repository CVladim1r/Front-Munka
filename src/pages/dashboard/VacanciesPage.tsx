import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const VacanciesPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    { 'Vacancies Page, ну тип размещение и тп' }
                </Typography>
            </Box>
        </Container>
    );
};

export default VacanciesPage;
