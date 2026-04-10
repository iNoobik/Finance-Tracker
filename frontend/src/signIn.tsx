import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from './components/InputField';
import './style.css';

function SignIn() {

    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

        /*
    try {
        const response = await fetch('https://localhost:8080/api/auth/login', { //запрос на бэк
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: id, 
                password: password
            })
        });
        if (response.ok) {
            const data = await response.json();
            const token = data.token; 
            if (rememberMe) {
                localStorage.setItem('authToken', token);
            } else {
                sessionStorage.setItem('authToken', token);
            }
            navigate('/');
            
        } else {
            const errorData = await response.json();
            console.error("Сервер отказал во входе:", errorData);
            alert("Неверный логин или пароль!"); 
        }

    } catch (error) {        // Сюда код попадет только если пропал интернет или сервер "лежит" (502/503)
        console.error("Ошибка сети:", error);
        alert("Не удалось подключиться к серверу. Проверьте интернет.");
    }
    */
        
    console.log("Данные для отправки:", { id, password, rememberMe });
    
    const fakeToken = "my-secret-token";
    if (rememberMe) {
        localStorage.setItem('authToken', fakeToken);
    } else {
        sessionStorage.setItem('authToken', fakeToken);
    }
    navigate('/');
        
};

    return (
        <div className='form'>
            <h1>Вход</h1>
            <form 
                id="signInForm" 
                onSubmit={handleSubmit} 
                className="inputForm"
            >
                <InputField
                    label="Логин или электронная почта"
                    placeholder='login или example@email.com'
                    id="id"
                    isRequired
                    value={id}
                    onChange={(e) => setId(e.target.value)}
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
                <div>
                    <input 
                        type="checkbox" 
                        id="rememberMe" 
                        name="rememberMe" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="smallLabel" htmlFor="rememberMe">
                        Запомнить меня
                    </label>
                </div>
            </form>

            <div>
                <button type="submit" form="signInForm">
                    Войти
                </button>
                <p className="smallLabel">
                    Нет аккаунта? <Link to="/signUp">Зарегистрироваться</Link>
                </p>
                <p className="smallLabel">
                    <Link to="/passwordRecovery">Забыли пароль?</Link>
                </p>
            </div>
        </div>
    );
}
export default SignIn;