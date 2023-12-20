import classNames from 'classnames';
import styles from './test-axios-post-2.module.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import {baseUrl} from '../../constants';

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
        const navigate = useNavigate();
        const apiUrl = `${baseUrl}/accounts/signup/`;
        const apiUrl2 = `${baseUrl}/user-token/`;
        try {
        const response = await axios.post(apiUrl, formData,config);
        console.log(response.data);

        if (response.status === 200) {
                // 跳转到用户首页或执行其他登录后的逻辑
                //history.push('/userhome');
                console.log('Login OK',response.data);
                const response2 = await axios.post(apiUrl2, {
                    username: formData.email,
                    password: formData.password1,
                });
                console.log('Login2 OK',response2.data);
                localStorage.setItem('accessToken', response2.data.token);
                console.log('response2.data.token',response2.data.token);
                // 在这里进行你的其他操作，比如存储在本地存储中
                navigate('/react/userprofile'); // 在 useEffect 中调用 navigate
            } else {
                console.error('Login failed');
            }
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
