import React from 'react';
import InputField from './assets/components/InputField';
import './style.css';

function SignUp() {
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        console.log("Данные отправлены!", { password, passwordConfirm });
    };
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const passwordsMatch = password === passwordConfirm || passwordConfirm === "";

    return (
        <div className='form'>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="ФИО"
                    id="fullName"
                    placeholder="Фамилия Имя Отчество"
                    isRequired
                    errorText="Пожалуйста, введите ФИО"
                />
                <InputField
                    label="Логин"
                    id="login"
                    placeholder="login"
                    isRequired
                    errorText="Введите корректный адрес электронной почты"
                />
                <InputField
                    label="Электронная почта"
                    id="email"
                    placeholder="example@email.com"
                    isRequired
                    type = "email"
                    errorText="Пожалуйста, введите логин"
                />
                <InputField
                    label="Пароль"
                    id="password"
                    placeholder="••••••••"
                    isRequired
                    isPassword
                    type = "password"
                    errorText="Пожалуйста введите корректный пароль"
                />
                <InputField
                    label="Повторите пароль"
                    id="passwordConfirm"
                    placeholder="••••••••"
                    isRequired
                    isPassword
                    type = "password"
                    errorText={!passwordsMatch ? "Пароли не совпадают" : ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
                />
                <div>
                    <input type="checkbox" id="tosConfirm" name="tosConfirm" />
                    <label className="smallLabel" htmlFor="tosConfirm">
                        Я согласен с <a href="/tos.html">политикой обработки персональных данных</a>
                    </label>
                </div>
            </form>
            <div>
                <button type="submit">Зарегистрироваться</button>
                <p className="smallLabel">
                    Уже есть аккаунт? <a href="/signIn.html">Войти</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;