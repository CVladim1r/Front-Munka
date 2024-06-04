import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthSwitch: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            {isLogin ? <LoginForm /> : <RegisterForm />}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default AuthSwitch;
