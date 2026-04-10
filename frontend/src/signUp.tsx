import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from './components/InputField';
import './style.css';

function SignUp() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const passwordsMatch = password === passwordConfirm || passwordConfirm === "";

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!passwordsMatch) {
            alert("Пароли не совпадают!");
            return;
        }

        try {
            const response = await fetch('http://твой-сервер/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, login, email, password }),
            });

            if (response.ok) {
                navigate('/signedUp');
            } else {
                alert("Ошибка при регистрации.");
            }
        } catch (error) {
            alert("Не удалось подключиться к серверу.");
        }
    };

    return (
        <div className='form'>
            <h1>Регистрация</h1>
            <form 
                id="signUpForm" 
                onSubmit={handleSubmit} 
                className="inputForm"
            >
                <InputField
                    label="ФИО"
                    id="fullName"
                    placeholder="Фамилия Имя Отчество"
                    isRequired
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <InputField
                    label="Логин"
                    id="login"
                    placeholder="login"
                    isRequired
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <InputField
                    label="Электронная почта"
                    id="email"
                    placeholder="example@email.com"
                    isRequired
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    label="Пароль"
                    id="password"
                    placeholder="••••••••"
                    isRequired
                    isPassword
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputField
                    label="Повторите пароль"
                    id="passwordConfirm"
                    placeholder="••••••••"
                    isRequired
                    isPassword
                    type="password"
                    errorText={!passwordsMatch ? "Пароли не совпадают" : ""}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <div>
                    <input type="checkbox" id="tosConfirm" name="tosConfirm" required />
                    <label className="smallLabel" htmlFor="tosConfirm">
                        Я согласен с <Link to="/tos">политикой обработки персональных данных</Link>
                    </label>
                </div>
            </form>

            <div>
                <button type="submit" form="signUpForm">
                    Зарегистрироваться
                </button>
                <p className="smallLabel">
                    Уже есть аккаунт? <Link to="/signIn">Войти</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;