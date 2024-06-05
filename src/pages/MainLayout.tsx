import React, { ReactNode } from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import Header from '../components/NavigationBar/Header';
import { Box } from '@mui/material';

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box display="flex" sx={{ backgroundColor: '#FEF8F4', minHeight: '100vh' }}>
            <Box>
                <Navbar />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Header />
                <Box flexGrow={1} p={3} sx={{ backgroundColor: '#FEF8F4' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;