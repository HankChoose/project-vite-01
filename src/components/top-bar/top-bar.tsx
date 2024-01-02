import classNames from 'classnames';
import styles from './top-bar.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useTopbar } from '../../TopbarContext';
import React, { useState, useEffect } from 'react';
import {baseUrl} from '../../constants';
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { BsPersonUp,BsPerson,BsPersonFill,BsHouseDoor,BsHouseFill,BsSearchHeart,BsPersonFillDash,BsPersonVcard,BsSendPlusFill} from "react-icons/bs";
import { useAuth } from '../../AuthContext';

export interface TopBarProps {
    className?: string;
}


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TopBar = ({ className }: TopBarProps) => {
    const { isLoggedIn, signIn, signOut } = useAuth();

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
   
    const navigate = useNavigate();
    const handleLogout = async () => {
      const token = localStorage.getItem('accessToken');
      const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
      const apiUrl = `${baseUrl}/accounts/logout/`;
      try {
        // 向服务器发送登出请求
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,  // 注意这里的格式，应为 `Token ${token}`
          },
        });

        if (response.ok) {
          localStorage.removeItem('accessToken');
          // 处理成功登出的逻辑，例如重定向到登录页面
          signOut();
          navigate('/react/signin'); // 在 useEffect 中调用 navigate
        } else {
          // 处理登出失败的情况
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('Error during logout:', error);
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
     
      
    </div>
   
    <div  className={classNames(styles.toRowUser)}>
       <a href="https://zhiyouyuec.com"><BsHouseFill />Home</a>
      <Link to="/react/userapply"><BsSendPlusFill />Demand</Link>
      {isLoggedIn ?  (
          // 用户已登录，显示账户信息和登出按钮
          <>
          <Link to="/react/signin"  onClick={handleLogout}><BsPersonFillDash />Log Out</Link>
          <Link to="/react/userprofile"><BsPersonVcard />My Account</Link>
          </>
        ) : (
          // 用户未登录，显示登录按钮或登录表单
          <Link to="/react/signin"><BsPersonUp />Sign In</Link>
        )}
    </div>
    
  </div>;
};
