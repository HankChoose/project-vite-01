import classNames from 'classnames';
import styles from './test-list-search.module.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {baseUrl} from '../../constants';

export interface TestListSearchProps {
    className?: string;
    
}

export const TestListSearch = ({ className }: TestListSearchProps) => {
  interface data {
    id: string;
    demand_type: string;
    demand_description: string;
    username: string;
    email: string;
    [key: string]: any;
    // 其他属性...
  }
  const [data, setData] = useState<data[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedField, setSortedField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const token = localStorage.getItem('accessToken');

  const apiUrl = `${baseUrl}/user-demand-list/`;
  useEffect(() => {
    // Fetch data from your API or any data source
    axios.get(apiUrl)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  // Filtering logic
  const filteredData = data.filter(item =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic
  const sortedData = sortedField
    ? [...filteredData].sort((a, b) => {
        const order = sortOrder === 'asc' ? 1 : -1;
        return a[sortedField] > b[sortedField] ? order : -order;
      })
    : filteredData;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return <div className={classNames(styles.root, className)}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => {setSortedField('username'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}}>UserName</th>
            <th onClick={() => {setSortedField('age'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}}>ID</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.id}</td>
              {/* Render other columns */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Pagination */}
        {Array.from({ length: Math.ceil(sortedData.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
  </div>;
};

export default TestListSearch;