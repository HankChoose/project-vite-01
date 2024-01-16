import classNames from 'classnames';
import styles from './test-list-data-table.module.scss';
import { baseUrl } from '../../constants';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TestDataTable } from '../test-data-table/test-data-table';
import { fetch_data_csrf_get } from '../../apiService';
import { TestDataGrid } from '../test-data-grid/test-data-grid';
import { BiSolidGrid } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';

export interface TestListDataTableProps {
    className?: string;
}

interface Data {
    id: string;
    apply_type: string;
    requirements: string;
    username: string;
    email: string;
    image_path_main: string;
    apply_time: Date; // Change the type to Date
    comment: string;
    comment2: string;
    [key: string]: string | Date; // Adjust the index signature if needed
    // Other properties...
}

const sampleData = [
    {
        id: '1',
        apply_type: 'apply_type 1',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank1',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    {
        id: '2',
        apply_type: 'apply_type 2',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank2',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    // ... other data objects
];



export const TestListDataTable = ({ className }: TestListDataTableProps) => {
    const [viewMode, setViewMode] = useState('list'); // 初始视图模式为列表
    const toggleViewMode = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'));
    };

    useEffect(() => {
        fetchData();
    }, [])
    const [data1, setData] = useState<Data[]>([]);
    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-apply-mian-list/`;
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

    return <div className={classNames(styles.root)}>
                <div>
                    <button className={styles.buttonStyle} onClick={toggleViewMode}>
                     {viewMode === 'list' ? <><BiSolidGrid /> Grid View</> : <><FaListUl /> List View</>}
                    </button>
                    {viewMode === 'list' ? <TestDataTable data={data1} /> : <TestDataGrid data={data1} />}
                </div>
        </div>
};
