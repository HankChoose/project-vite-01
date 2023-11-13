import classNames from 'classnames';
import styles from './test-check-email.module.scss';
import React, { useState } from 'react';
import axios from 'axios';

export interface TestCheckEmailProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestCheckEmail = ({ className }: TestCheckEmailProps) => {

    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const checkEmailExist = async () => {
        try {
        const response = await axios.get(`/api/check-email-exist/${email}/`);
        const data = response.data;
        setEmailExists(data.exists);
        } catch (error) {
        console.error('Error checking email existence:', error);
        }
    };
    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.FormRow)}> <a href="https://zhiyouyuec.com">Home</a></div>
         <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
        />
        <button onClick={checkEmailExist}>Check Email Existence</button>
        {emailExists ? 'Email exists in the database' : 'Email does not exist'}
    
    </div>;
};
