import classNames from 'classnames';
import styles from './test-list-data-table.module.scss';
import { baseUrl } from '../../constants';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TestDataTable } from '../test-data-table/test-data-table';
import { fetch_data_csrf_get } from '../../apiService';

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
        const apiUrl = `/user-demand-list2/`;
        try {
            const data = await fetch_data_csrf_get(apiUrl);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            } else {
                console.log('fetchData response:', data);
            }
            setData(data);
        } catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
       
    };

    return <div className={classNames(styles.root, className)}> 
        <TestDataTable data={data} />
    </div>;
};
