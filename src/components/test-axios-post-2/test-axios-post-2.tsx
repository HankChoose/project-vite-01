import classNames from 'classnames';
import styles from './test-axios-post-2.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export interface TestAxiosPost2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestAxiosPost2 = ({ className }: TestAxiosPost2Props) => {
    const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
    const config = {
       headers: {
         'Content-Type': 'multipart/form-data',
         'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        const response = await axios.post('/accounts/signup/', formData,config);
        console.log(response.data);
        } catch (error) {
        console.error('Error creating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </label>

        <label>
            Email:
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </label>

        <label>
            Password:
            <input
            type="password"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            />
        </label>

        <label>
            Confirm Password:
            <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            />
        </label>

        <button type="submit">Sign Up</button>
        </form>
    );
};
