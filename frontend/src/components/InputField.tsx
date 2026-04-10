import React, { useState } from 'react';

interface InputFieldProps {
    label?: string;
    id: string;
    placeholder?: string;
    errorText?: string;
    isRequired?: boolean;
    isPassword?: boolean;
    type?: string;
    value?: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ 
    label, 
    id, 
    placeholder, 
    errorText, 
    isRequired, 
    isPassword,
    type = "text",
    value,
    onChange
    }: InputFieldProps) {
    const [isTypePassword, setIsTypePassword] = useState(true);

    return (
        <div className={isPassword ? "passwordField" : ""}>
            {
                label && (
                    <label htmlFor={id}>
                        {label} {isRequired && <span className="warning">*</span>}
                    </label>
                )
            }
            <br />
            
            <input 
                // Если это пароль, проверяем состояние "глазика"
                type={isPassword && isTypePassword ? "password" : type} 
                id={id} 
                className={isPassword ? "passwordPadding" : ""}
                placeholder={placeholder}
                value={value} // Устанавливаем значение
                onChange={onChange} // Передаем событие изменения вверх
                required={isRequired} // Включаем встроенную валидацию браузера
            />

            {
                isPassword && (
                    <>
                        <input 
                            type="checkbox" 
                            className="toggle-checkbox" 
                            id={`toggle-${id}`} 
                            onChange={() => setIsTypePassword(!isTypePassword)} 
                        />
                        <label htmlFor={`toggle-${id}`} className="toggle-label">
                            {/* Иконка глаза */}
                            <span className={`eye-icon ${isTypePassword ? 'eye-open' : 'eye-closed'}`}></span>
                        </label>
                    </>
                )   
            }

            {/* Показываем текст ошибки, если он есть */}
            <div className="error-message" style={{ color: 'red', fontSize: '12px' }}>
                {errorText}
            </div>
        </div>
    );
}
export default InputField;