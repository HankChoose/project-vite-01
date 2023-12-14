import classNames from 'classnames';
import styles from './test-change-pw.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {baseUrl} from '../../constants';

export interface TestChangePWProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestChangePW = ({ className }: TestChangePWProps) => {
    const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
    const [email, setEmail] = useState('');
    const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const requestData = { 
            email: email,
        };

        const config = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            },
            body: JSON.stringify(requestData),
        };

        const apiUrl = `${baseUrl}/accounts/password/reset/`;

        try {
            const response = await axios.post(apiUrl, requestData,config);
            if (response.status === 200) {
               console.log('Password reset email sent:', response.data);
            } else {
                console.error('Password reset email sent failed');
            }  
        } catch (error) {
        console.error('Error sending password reset email:', error);
        }
    };
    return <div className={classNames(styles.root, className)}>
        <form onSubmit={handlePasswordReset}>
        <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Send Password Reset Email</button>
        </form>
    
    </div>;
};
