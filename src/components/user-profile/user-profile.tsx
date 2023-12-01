import classNames from 'classnames';
import styles from './user-profile.module.scss';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';

export interface UserProfileProps {
    className?: string;
}

export const UserProfile = ({ className }: UserProfileProps) => {
    interface UserData {
        id: string;
        username: string;
        email: string;
        // 其他属性...
    }
    const [userData, setUserData] = useState<UserData[]>([]);
    
    useEffect(() => {
        // 在组件加载时发送请求
        fetchData();
    }, []);

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('accessToken');

        if (token) {
            try {
                const response = await fetch('https://zhiyouyuec.com/user-profile/', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,  // 注意这里的格式，应为 `Token ${token}`
                    'Content-Type': 'application/json',
                },
                });

                if (response.ok) {
                const data = await response.json();
                console.log('data',data);
                setUserData(data);
                } else {
                // 处理请求失败的情况
                console.error('Failed to fetch user data:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        } else {
        // 处理令牌不存在的情况
        console.error('Access token is undefined or null.');
        }
    };

    return (
        <div>
        {userData ? (
            <div>
            <h1>User Home</h1>
            <p>Welcome!</p>
            <ul>
                {userData.map(item => (
                <li key={item.id}>{item.username}</li>
                ))}
            </ul>
           
            <ul>
                {userData.map(item => (
                <li key={item.id}>{item.email}</li>
                ))}
            </ul>
            </div>
        ) : (
            <p>Please log in to view user data.</p>
        )}
        </div>
    );
};
