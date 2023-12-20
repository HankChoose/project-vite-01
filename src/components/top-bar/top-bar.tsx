import classNames from 'classnames';
import styles from './top-bar.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useTopbar } from '../../TopbarContext';
import React, { useState, useEffect } from 'react';
import {baseUrl} from '../../constants';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { BsPersonUp,BsPerson,BsPersonFill,BsHouseDoor,BsHouseFill,BsSearchHeart,BsPersonFillDash,BsPersonVcard,BsSendPlusFill} from "react-icons/bs";

export interface TopBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TopBar = ({ className }: TopBarProps) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);


    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('accessToken');
        const apiUrl = `${baseUrl}/user-profile/`;
        if (token) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,  // 注意这里的格式，应为 `Token ${token}`
                        'Content-Type': 'application/json',
                },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('fetchData_data',data);
                    setUser(data);
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
    
    return <div className={classNames(styles.root, className)}>
    
    <div className={classNames(styles.toRow)}>
      <a href="https://zhiyouyuec.com">
        <div className={classNames(styles.toRow)}>
            <span className={classNames(styles.logoImage)}></span>
            <span className={classNames(styles.logoWord)}></span>
        </div>
      </a>
      <a href="https://zhiyouyuec.com"><BsHouseFill />Home</a>
      
    </div>
    <Link to="/react/testlink"> T </Link>
    <div  className={classNames(styles.toRowUser)}>

      {user ? (
          // 用户已登录，显示账户信息和登出按钮
          <>
          <Link to="/react/signup"><BsPersonFillDash />Sign Out</Link>
          <Link to="/react/signup"><BsPersonVcard />Account</Link>
          </>
        ) : (
          // 用户未登录，显示登录按钮或登录表单
          <Link to="/react/signin"><BsPersonUp />Sign In</Link>
        )}

        <Link to="/react/userapply"><BsSendPlusFill />Demand</Link>
    </div>
    
  </div>;
};
