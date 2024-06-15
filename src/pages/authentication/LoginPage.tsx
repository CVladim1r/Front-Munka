import LoginForm from '../../components/Auth/Login/LoginForm.tsx';
import LoginImage from '../../components/Auth/Image.tsx';
import {FC} from 'react'
import AuthBar from '../../components/NavigationBar/Auth/Navbar.tsx';

const LoginPage: FC = () =>{
    return(
        <div style={{display: 'flex', maxHeight:'100%'}}>
            <LoginForm />
            <LoginImage />
            <AuthBar />
        </div>
    );
}
export default LoginPage;