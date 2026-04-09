import React, { useState } from 'react';

interface InputFieldProps {
    label?: string;
    id: string;
    placeholder?: string;
    errorText?: string;
    isRequired?: boolean;
    isPassword?: boolean;
    type?: string;       
}

function InputField({ 
    label, 
    id, 
    placeholder, 
    errorText, 
    isRequired, 
    isPassword,
    type = "text" 
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
                type={isPassword && isTypePassword ? "password" : "text"} 
                id={id} 
                className={isPassword ? "passwordPadding" : ""}
                placeholder={placeholder} 
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
                            <span className={`eye-icon ${isTypePassword ? 'eye-open' : 'eye-closed'}`}></span>
                        </label>
                    </>
                )   
            }

            <div className="error-message">{errorText}</div>
        </div>
    );
}