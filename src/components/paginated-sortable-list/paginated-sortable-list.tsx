import classNames from 'classnames';
import styles from './paginated-sortable-list.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface PaginatedSortableListProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PaginatedSortableList = ({ className }: PaginatedSortableListProps) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    useEffect(() => {
        fetchData();
    }, [page, pageSize, sortOrder]);

    const fetchData = async () => {
        try {
        const response = await axios.get(`/api/data?page=${page}&pageSize=${pageSize}&sortOrder=${sortOrder}`);
        setData(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setPage(1); // Reset to the first page when changing page size
    };

    const handleSortChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
    };
    return <div className={classNames(styles.root, className)}>
    
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>
          <label>Page Size: </label>
          <select onChange={(e) => handlePageSizeChange(e.target.value)} value={pageSize}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <label>Sort Order: </label>
          <select onChange={(e) => handleSortChange(e.target.value)} value={sortOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    
    </div>;
};
