import classNames from 'classnames';
import styles from './test-request.module.scss';
import React, { useEffect, useState} from 'react';
import { fetch_data_token_get,fetch_data_token_post,axios_form_data_post, axios_json_data_post } from '../../apiService';

export interface TestRequestProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestRequest = ({ className }: TestRequestProps) => {
    
    const token = localStorage.getItem('accessToken');

    const handle_fetch_data_token_get = async () => {
        // 执行fetch_data_by_token请求
        const apiUrl = '/user-profile/';
        try {
            const data = await fetch_data_token_get(apiUrl,token);
            if (data.error){
                console.log('GET Response data.message:', data.message);
            }else{
                 console.log('GET Response:', data);
            }
        } catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get error:', error);
        }
    };

    const handle_axios_type_data_post_signup = async () => {
        // 执行fetch_data_by_token请求
        const apiUrl = '/accounts/signup/';
        const userData = {
            username: 'hankchenvtest0',
            email: 'hankchenvtest0@gmail.com',
            password1: 'chy123hank$A',
            password2: 'chy123hank$A',
            // 添加要发送给Django的数据
        };
        try {
            const data = await axios_form_data_post(apiUrl,userData,'multipart/form-data');
            if (data.error){
                console.log('GET Response data.message:', data.message);
            }else{
                 console.log('GET Response:', data);
            }
        } catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get error:', error);
        }
    };

    const handle_axios_type_data_post_token = async () => {
        // 执行fetch_data_by_token请求
        const apiUrl = '/user-token/';
        const userData = {
            username: 'hankchenvtest0@gmail.com',
            password: 'chy123hank$A',
            // 添加要发送给Django的数据
        };
        try {
            const data = await axios_json_data_post(apiUrl,userData);
            if (data.error){
                console.log('GET Response data.message:', data.message);
            }else{
                 console.log('GET Response:', data);
            }
        } catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get error:', error);
        }
    };


    return <div className={classNames(styles.root, className)}>
        <button onClick={handle_fetch_data_token_get}>fetch_data_token_get</button>
        <button onClick={handle_axios_type_data_post_signup}>axios_type_data_post_signup</button>
        <button onClick={handle_axios_type_data_post_token}>axios_type_data_post_token</button>
    </div>;
};
