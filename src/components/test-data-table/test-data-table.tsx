import classNames from 'classnames';
import styles from './test-data-table.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FromRowRight } from '../from-row-right/from-row-right';
import { FromRowSeparate } from '../from-row-separate/from-row-separate';
import { baseUrl } from '../../constants';
import { FcUp, FcDown } from 'react-icons/fc';

interface Data {
    id: string;
    demand_type: string;
    demand_description: string;
    username: string;
    email: string;
    [key: string]: string; // 允许使用字符串索引
    // 其他属性...
}

export interface TestDataTableProps {
    className?: string;
    data: Data[];
}


export const TestDataTable = ({ className, data }: TestDataTableProps) => {
    // 状态管理
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5); // 每页显示的数据量
    const [sortOrder, setSortOrder] = useState('desc'); // 'asc' 或 'desc'
    const [sortedField, setSortedField] = useState('id'); // 按照哪个字段排序

    // 过滤数据
    const filteredData = data.filter((item: Data) => {
        return (
            item.demand_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.demand_type.toLowerCase().includes(searchTerm.toLowerCase())
            // 添加其他属性的搜索条件...
        );
    });

    // 排序数据
    const sortedData = [...filteredData].sort((a, b) => {

        if (sortedField === 'id') {
        // 如果是 id 字段，以数字形式比较
        const compareValue = parseInt(a[sortedField], 10)-parseInt(b[sortedField], 10);
        return sortOrder === 'asc' ? compareValue : -compareValue;
      } else {
        // 其他字段按字符形式比较
         const compareValue = String(a[sortedField]).localeCompare(String(b[sortedField]));
         return sortOrder === 'asc' ? compareValue : -compareValue;
      }
       
        
    });

    // 分页数据
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    // 处理页码变化
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setPage(1); // Reset to the first page when changing page size
    };

    // 处理排序变化
    const handleSortChange = (field: string) => {
        setSortedField(field);
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };


    const renderTableBody = () => {
        if (filteredData.length === 0) {
            // 如果没有符合条件的数据，显示一行没有数据的行
            return (
                <tr>
                    <td colSpan={4}>No matching data found</td>
                    {/* 如果有更多的列，需要根据实际列数调整 colSpan */}
                </tr>

            );
        }

        return currentData.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.demand_type}</td>
                <td><a href={`userapplycontent/${item.id}`} target="_self" rel="noopener noreferrer">
                       {item.demand_description}
                    </a></td>
                <td>{item.username}</td>
                <td>{item.email}</td>
               
            </tr>
        ));
    };

    return (
      
        <div className={classNames(styles.root)}>
            <FromRowSeparate>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <label>Page Size</label>
                    <select onChange={(e) => handlePageSizeChange(Number(e.target.value))} value={pageSize}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </FromRowSeparate>

            {/* 表格 */}
            <Table striped bordered hover>
                {/* 表头 */}
                <thead>
                    <tr>
                        <th style={{ width: '80px', textAlign: 'center' }}  className={styles.handpoint} onClick={() => handleSortChange('id')} >ID
                            {sortedField === 'id' && (<span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>)}
                        </th>
                        <th style={{ width: '150px' , textAlign: 'center' }} className={styles.handpoint} onClick={() => handleSortChange('demand_type')}>Type
                            {sortedField === 'demand_type' && (<span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>)}
                        </th>
                        <th style={{ width: '450px', textAlign: 'center' }}  className={styles.handpoint} onClick={() => handleSortChange('demand_description')}>Content
                            {sortedField === 'demand_description' && (<span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>)}
                        </th>
                        <th style={{ width: '150px', textAlign: 'center' }} className={styles.handpoint} onClick={() => handleSortChange('username')}>Username
                            {sortedField === 'username' && (<span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>)}
                        </th>
                        <th style={{textAlign: 'center' }} className={styles.handpoint} onClick={() => handleSortChange('email')}>Email
                            {sortedField === 'email' && (<span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>)}
                        </th>
                       
                        {/* 其他属性的表头... */}
                    </tr>
                </thead>
                {/* 表格内容 */}
                <tbody>{renderTableBody()}</tbody>
            </Table>

            {/* 分页组件 */}
            <div>
                {Array.from({ length: Math.ceil(filteredData.length / pageSize) }).map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};