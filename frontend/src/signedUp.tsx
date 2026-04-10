import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function SignedUp() {

    const navigate = useNavigate();

    return (
        <div className='form'>
            <div>
                <h1>Регистрация завершена</h1>
                <p className="textCentered">Регистрация прошла успешно<br />и теперь вы можете войти в аккаунт.</p>
            </div>
            <div>
                <button type="button" onClick={() => navigate('/signIn')}>
                    Войти
                </button>
                <p className="smallLabel textCentered"><Link to ='index'>На главную</Link></p>
            </div>
        </div>
    );
}
export default SignedUp;