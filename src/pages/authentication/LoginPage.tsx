import LoginForm from '../../components/Auth/Login/LoginForm.tsx';
import LoginImage from '../../components/Auth/LoginImage.tsx';
import About from '../../components/Auth/AboutContainer.tsx';
import {FC} from 'react'

const LoginPage: FC = () =>{
    return(
        <div>
            <LoginImage />
            <LoginForm />
            <About/>
        </div>
    );
}
export default LoginPage;