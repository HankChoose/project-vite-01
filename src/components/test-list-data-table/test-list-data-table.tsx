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
    apply_type: string;
    requirements: string;
    username: string;
    email: string;
    main_image_id: string | number;
	image_path0: string;
	image_path1: string;
	image_path2: string;
	apply_time: Date;
	comment: string;
	comment2: string;
    [key: string]: string | number | Date; // 允许使用字符串索引
    // 其他属性...
}

const sampleData = [
    { id: '1', apply_type: 'apply_type 1', requirements: 'Description 1', username: 'hank1', email: 'hank1@example.com' },
    { id: '2', apply_type: 'apply_type 2', requirements: 'Description 2', username: 'Ray2', email: 'ray2@example.com' },
    { id: '3', apply_type: 'apply_type 3', requirements: 'Description 3', username: 'hank1', email: 'hank1@example.com' },
    { id: '4', apply_type: 'apply_type 4', requirements: 'Description 4', username: 'Ray2', email: 'ray2@example.com' },
    { id: '5', apply_type: 'apply_type 5', requirements: 'Description 5', username: 'hank1', email: 'hank1@example.com' },
    { id: '6', apply_type: 'apply_type 6', requirements: 'Description 6', username: 'Ray2', email: 'ray2@example.com' },
];

export const TestListDataTable = ({ className }: TestListDataTableProps) => {
    
    useEffect(() => {
        fetchData();
    }, [])
    const [data, setData] = useState<Data[]>([]);
    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-apply-list2/`;
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
