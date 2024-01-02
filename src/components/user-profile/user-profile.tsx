import classNames from 'classnames';
import styles from './user-profile.module.scss';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Table,ListGroup} from 'react-bootstrap';
import { fetch_data_token_get, fetch_data_token_post } from '../../apiService';

export interface UserProfileProps {
    className?: string;
}

export const UserProfile = ({ className }: UserProfileProps) => {
    interface UserData {
        id: string;
        username: string;
        email: string;
        // 其他属性...
    }
    const [userData, setUserData] = useState<UserData[]>([]);
    const [isVerified, setIsVerified] = useState(false);
    const [editing, setEditing] = useState(false);
    //const [editable, setEditable] = useState(false);
    const [username, setUsername] = useState(''); // Initial username
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        // 在组件加载时发送请求
        fetchData();
    }, []);

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌

        const apiUrl = `/user-profile/`;
        try {
            const data = await fetch_data_token_get(apiUrl, token);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            } else {
                console.log('fetchData response:', data);
            }
            setUserData(data);
        } catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        // 处理保存逻辑，比如将 username 提交到服务器
        handleChangeUsername();
        fetchData();
        setEditing(false);
    };

    const handleCancel = () => {
        // 处理取消编辑逻辑，比如还原原始的 username
        setEditing(false);
    };

    const firstusername = userData.length > 0 ? userData[0].username : undefined;
    const firstEmail = userData.length > 0 ? userData[0].email : null;

    const handleChangeUsername = async () => {
        const apiUrl = `/user-change-username/`;
        try {
            const data = await fetch_data_token_post(apiUrl, token, username);
            if (data.error) {
                console.log('handleChangeUsername response data.message:', data.message);
            } else {
                console.log('handleChangeUsername response:', data);
            }
        } catch (error) {
            // 处理错误
            console.error('fhandleChangeUsername error:', error);
        }
    };

    return (
        <div>
            <Card style={{ width: '60vw' }}>
                <Card.Body>
                    <Card.Title>
                        <h1>User Home</h1>
                    </Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <h3>Welcome! {firstusername}</h3>
                    </ListGroup.Item>

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
                                    <td>Username:</td>
                                    <td>
                                        <div>
                                            {editing ? (
                                                <div className={classNames(styles.FormRow)}>
                                                    <input
                                                        type="text"
                                                        value={username}
                                                        className={classNames(styles.Input)}
                                                        placeholder={firstusername}
                                                        onChange={(e) =>
                                                            setUsername(e.target.value)
                                                        }
                                                    />
                                                    <Button
                                                        variant="primary"
                                                        size="sm"
                                                        onClick={handleSave}
                                                    >
                                                        Save
                                                    </Button>{' '}
                                                    <Button
                                                        variant="primary"
                                                        size="sm"
                                                        onClick={handleCancel}
                                                    >
                                                        Cancel
                                                    </Button>{' '}
                                                </div>
                                            ) : (
                                                <div className={classNames(styles.FormRow)}>
                                                    <span>{firstusername}</span>
                                                    <Button
                                                        variant="primary"
                                                        size="sm"
                                                        onClick={handleEdit}
                                                    >
                                                        Edit
                                                    </Button>{' '}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{firstEmail}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <Card.Link href="#">My Post</Card.Link>
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
        </div>
    );
};
