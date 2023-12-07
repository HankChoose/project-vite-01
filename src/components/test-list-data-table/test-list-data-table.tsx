import classNames from 'classnames';
import styles from './test-list-data-table.module.scss';
import { baseUrl } from '../../constants';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TestDataTable } from '../test-data-table/test-data-table';

export interface TestListDataTableProps {
    className?: string;
}

interface Data {
    id: string;
    demand_type: string;
    demand_description: string;
    username: string;
    email: string;
    [key: string]: string; // 允许使用字符串索引
    // 其他属性...
}

const sampleData = [
    { id: '1', demand_type: 'demand_type 1', demand_description: 'Description 1', username: 'hank1', email: 'hank1@example.com' },
    { id: '2', demand_type: 'demand_type 2', demand_description: 'Description 2', username: 'Ray2', email: 'ray2@example.com' },
    { id: '3', demand_type: 'demand_type 3', demand_description: 'Description 3', username: 'hank1', email: 'hank1@example.com' },
    { id: '4', demand_type: 'demand_type 4', demand_description: 'Description 4', username: 'Ray2', email: 'ray2@example.com' },
    { id: '5', demand_type: 'demand_type 5', demand_description: 'Description 5', username: 'hank1', email: 'hank1@example.com' },
    { id: '6', demand_type: 'demand_type 6', demand_description: 'Description 6', username: 'Ray2', email: 'ray2@example.com' },
];

export const TestListDataTable = ({ className }: TestListDataTableProps) => {
    
    useEffect(() => {
        fetchData();
    }, [])
    const [data, setData] = useState<Data[]>([]);
    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('accessToken');
        const apiUrl = `${baseUrl}/user-demand-list/`;

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
                    console.log('data', data);
                    setData(data);
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
        <TestDataTable data={data} />
    </div>;
};
