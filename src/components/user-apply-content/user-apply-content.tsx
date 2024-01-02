import classNames from 'classnames';
import styles from './user-apply-content.module.scss';
import { useParams } from 'react-router-dom';
import {Button, Card,Table,ListGroup} from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { fetch_data_csrf_get } from '../../apiService';

export interface UserApplyContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApplyContent = ({ className }: UserApplyContentProps) => {
    const {id}= useParams();
    const apiUrl = `/user-apply-content/${id}`;
    const [applyData, setApplyData] = useState<ApplyData[]>([]);
    
    interface ApplyData {
        id: string;
        username: string;
        email: string;
        demand_type: string;
		demand_description: string;
        // 其他属性...
    }

    useEffect(() => {
        // 在组件加载时发送请求
        fetchData();
    }, []);

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌

        try {
            const data = await fetch_data_csrf_get(apiUrl);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            } else {
                console.log('fetchData response:', data);
            }
            setApplyData(data);
        } catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    };

    const firstid = applyData.length > 0 ? applyData[0].id : undefined;
    const firstusername = applyData.length > 0 ? applyData[0].username : undefined;
    const firstEmail = applyData.length > 0 ? applyData[0].email : null;
    const firstdemand_type = applyData.length > 0 ? applyData[0].demand_type  : undefined;
    const firstdemand_description = applyData.length > 0 ? applyData[0].demand_description : null;

    return <div className={classNames(styles.root, className)}>
        <h2>User Apply Content ID: {id}</h2>
        <Card style={{ width: '60vw' }}>
                <Card.Body>
                    <Card.Title>
                   
                    </Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                 
                    <ListGroup.Item>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ width: '150px' }}>Item</th>
                                    <th>Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                    <td>Id:</td>
                                    <td>
                                       
                                    </td>
                                </tr>
                                <tr>
                                    <td>Username:</td>
                                    <td>
                                       {firstusername }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{firstEmail}</td>
                                </tr>
                                <tr>
                                    <td>Type:</td>
                                    <td>{firstdemand_type}</td>
                                </tr>
                                 <tr>
                                    <td>Content:</td>
                                    <td>{firstdemand_description}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
            </Card>
    </div>;
};
