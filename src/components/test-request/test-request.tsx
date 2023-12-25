import classNames from 'classnames';
import styles from './test-request.module.scss';
import React, { useEffect, useState} from 'react';
import { fetch_data_token_get } from '../../apiService';
import {baseUrl} from '../../constants';

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
            console.log('GET Response:', data);
        } catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get error:', error);
        }
    };
    return <div className={classNames(styles.root, className)}>
        <button onClick={handle_fetch_data_token_get}>fetch_data_token_get</button>
    </div>;
};
