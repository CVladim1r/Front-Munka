import Munka from '../../assets/munka.svg';
const Auth:Function = () => {
    return(
    <div className="auth">
        <div className='image'>
            <img src="{Munka}" alt="Munka" />
        </div>
        <div className='text-top'>
            <div className='p-auth'>
                <p>Авторизация</p>
            </div>
            <div className='p-email-passw'>
                <p>Введите почту и пароль для авторизации</p>
            </div>
        </div>
        <div className='form-auth'>
            <form action="№">
                <div className='email'>
                    <div className='p-email'>
                        <p>Email</p>
                    </div>
                    <div className='input-email'>
                        <input type="text" name="email"/>
                    </div>
                </div>
                <div className='passw'>
                    <div className='p-passw'>
                        <p>Пароль</p>
                    </div>
                    <div className='input-passw'>
                        <input type="password" name="password" />
                    </div>
                </div>
            </form>
        </div>
                <div className='others'>
                    <div className='show-passw'>
                        <div id = 'sub-but'>
                            <button type="submit"></button>
                        </div>
                        <div id = 'p-show-passw'>
                            <span>Показать пароль</span>
                        </div>
                    </div>
                    <div className='forgot-passw'>
                        <div ></div>
                        <a href="#"><p>Забыл пароль?</p></a>
                        <button>Sign in</button>
                        <span>Не зарегестрирован?</span>
                        <a href="#"><p>Создать аккаунт</p></a>

                    </div>

                </div>


        </div>

    </div>);
}
export default Auth;