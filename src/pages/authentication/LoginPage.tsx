import LoginForm from '../../components/Auth/Login/LoginForm.tsx';
import LoginImage from '../../components/Auth/LoginImage.tsx';
import {FC} from 'react'

const LoginPage: FC = () =>{
    return(
        <div style={{display: 'flex', minHeight: "100vh"}}>
            <LoginForm />
            <LoginImage />
        </div>
    );
}
export default LoginPage;