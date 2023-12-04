import classNames from 'classnames';
import styles from './test-list.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { FromRowRight } from '../from-row-right/from-row-right';
import { FromRowSeparate } from '../from-row-separate/from-row-separate';
import {baseUrl} from '../../constants';

export interface TestListProps {
    className?: string;
}


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestList = ({ className }: TestListProps) => {
    interface data {
        id: string;
        demand_type: string;
        demand_description: string;
        username: string;
        email: string;
        // 其他属性...
    }
    const [data, setData] = useState<data[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortedField, setSortedField] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    
    useEffect(() => {
        fetchData();
    }, [page, pageSize, sortOrder]);

    // Filtering logic
    const filteredData = data.filter(item =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

     // Sorting logic
    const sortedData = sortedField
    ? [...filteredData].sort((a, b) => {
        const order = sortOrder === 'asc' ? 1 : -1;
        return a[sortedField as keyof typeof a] > b[sortedField as keyof typeof b] ? order : -order;
      })
    : filteredData;


    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setPage(1); // Reset to the first page when changing page size
    };

    const handleSortChange = (newSortOrder: string) => {
        setSortOrder(newSortOrder);
    };

    const handleCheckboxChange = (id: number) => {
        const selected = selectedItems.includes(id);

        if (selected) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleDelete = () => {
        const updatedData = data.filter(item => !selectedItems.includes(Number(item.id)));
        setData(updatedData);
        setSelectedItems([]);
    };

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
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => {
                setSearchTerm(e.target.value);
                console.log("Search Term:", e.target.value);
            }}
            
        />
        <FromRowRight>
            <div>
                <label></label>
                <select onChange={(e) => handlePageSizeChange(Number(e.target.value))} value={pageSize}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div>
                <label></label>
                <select onChange={(e) => handleSortChange(e.target.value)} value={sortOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </FromRowRight>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Description</th>
                     <th>Username</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(Number(item.id))}
                                onChange={() => handleCheckboxChange(Number(item.id))}
                            />
                        </td>
                        <td>{item.id}</td>
                        <td>{item.demand_type}</td>
                        <td>{item.demand_description}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                        <a href={`userapplycontent/${item.id}`} target="_blank" rel="noopener noreferrer">
                            Open
                        </a>
                        </td>
                       
                    </tr>
                ))}
            </tbody>
        </Table>
        <FromRowSeparate>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </FromRowSeparate>
    </div>;
};
