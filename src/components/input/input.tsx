import classNames from 'classnames';
import styles from './input.module.scss';
import React, { useState } from 'react';

export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}

function isEmailValid(email: string) {
    // 使用正则表达式检查电子邮件格式
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
}

export const Input = ({ className, id, name }: InputProps) => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        setIsValid(isEmailValid(inputEmail));
    };
   
    return (

        <div className={classNames(styles.root, className)}>
            <input className={styles.Input} 
             type="text" 
             placeholder="Email"  
              value={email}
            onChange={handleEmailChange} 
            />
            {isValid ? (
            <p>Email is valid</p>
        ) : (
            <p>Email is not valid</p>
        )}
        </div>
    );
};
