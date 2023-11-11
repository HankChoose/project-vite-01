import classNames from 'classnames';
import styles from './input.module.scss';
import React, { useState } from 'react';

export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}


export const Input = ({ className, id, name }: InputProps) => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        
    };
    return (

        <div className={classNames(styles.root, className)}>
            <input className={styles.Input} 
             type="text" 
             placeholder="Email"  
             value={email}
             onChange={handleEmailChange} 
            />
        </div>
    );
};
