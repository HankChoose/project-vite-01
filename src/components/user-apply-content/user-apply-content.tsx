import classNames from 'classnames';
import styles from './user-apply-content.module.scss';
import { useParams } from 'react-router-dom';
import { Button, Card, Table, ListGroup } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { fetch_data_csrf_get } from '../../apiService';
import { TestGetImages } from '../test-get-images/test-get-images';

export interface UserApplyContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApplyContent = ({ className }: UserApplyContentProps) => {
    const { id } = useParams();
    const apiUrl = `/user-apply-content/${id}`;
    const [applyData, setApplyData] = useState<ApplyData[]>([]);

    interface ApplyData {
        id: string;
        username: string;
        email: string;
        apply_type: string;
        requirements: string;
        main_image_id: string;
		image_path0: string;
		image_path1:string;
		image_path2:string; 
        apply_time: Date; // Change the type to Date
        comment: string;
        comment2: string;
        [key: string]: string | Date; // Adjust the index signature if needed
        // Other properties...
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
    const firstapply_type = applyData.length > 0 ? applyData[0].apply_type : undefined;
    const firstrequirements = applyData.length > 0 ? applyData[0].requirements : null;
    const firstimage_path0 = applyData.length > 0 ? applyData[0].image_path0 : null;
    const firstimage_path1 = applyData.length > 0 ? applyData[0].image_path1 : null;
    const firstimage_path2 = applyData.length > 0 ? applyData[0].image_path2 : null;

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
                                    {firstid}
                                </td>
                            </tr>
                            <tr>
                                <td>Username:</td>
                                <td>
                                    {firstusername}
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{firstEmail}</td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td>{firstapply_type}</td>
                            </tr>
                            <tr>
                                <td>Content:</td>
                                <td>{firstrequirements}</td>
                            </tr>

                            <tr>
                                <td>Images:</td>
                                <td>
                                <TestGetImages imageInfo={firstimage_path0!}/>
                                <TestGetImages imageInfo={firstimage_path1!}/>
                                <TestGetImages imageInfo={firstimage_path1!}/>
                                </td>
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
