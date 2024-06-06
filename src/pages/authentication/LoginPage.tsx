import LoginForm from '../../components/Auth/Login/LoginForm.tsx';
import LoginImage from '../../components/Auth/LoginImage.tsx';
import AboutContainer from '../../components/Auth/AboutContainer.tsx'
import {FC} from 'react'
import AuthBar from '../../components/NavigationBar/Auth/Navbar.tsx';

const LoginPage: FC = () =>{
    return(
        <div style={{display: 'flex', minHeight: "100vh"}}>
            <LoginForm />
            <LoginImage />
            <AuthBar />
        </div>
    );
}
export default LoginPage;