import { FC } from "react";
import RegisterForm from '../../components/Auth/Registration/RegistrationForm.tsx';
import ImageSecond from '../../components/Auth/ImageSecond.tsx';
import NavbarSecond from '../../components/NavigationBar/Auth/NavBarSecond.tsx'
const RegistrationPage: FC = () => {
    return(
        <div style={{display:"flex"}}>
            <ImageSecond />
            <RegisterForm />
            <NavbarSecond/>
        </div>
    );

}

export default RegistrationPage;
