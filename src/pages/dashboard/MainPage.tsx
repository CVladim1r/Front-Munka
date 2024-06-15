import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MainBody from '../../components/Main/MainBody';
const MainPage: React.FC = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <MainBody />
    );
};

export default MainPage;
