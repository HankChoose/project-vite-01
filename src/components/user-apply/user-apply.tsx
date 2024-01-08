import classNames from 'classnames';
import styles from './user-apply.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useContext, useRef, useEffect, useState, Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from '../../actions/userInfoActions';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-modal';
import { useAuth } from '../../AuthContext';
import { SignCard } from '../sign-card/sign-card';
import { fetch_data_token_get, fetch_data_token_post } from '../../apiService';

export interface UserApplyProps {
    className?: string;
    //callbackFunction?: (data: string) => void; // 定义回调函数类型
}

type RootState = {
    userInfo: {
        name: string;
        email: string;
    };
};

const modalStyles = {
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(203, 196, 223, 0.5)', // 背景颜色，可根据需要修改
        zIndex: 1000, // 调整 overlay 的 z-index
    },
    content: {
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        //border: 'none', // 移除边框
        //background: 'transparent', // 设定透明背景
        padding: 0, // 移除默认 padding
        borderRadius: 0, // 可以根据需要设置圆角
    },
};


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply = ({ className }: UserApplyProps) => {

    // 设置应用根元素
   interface UserData {
        id: string;
        username: string;
        email: string;
        // 其他属性...
    }
    const userInfo = useSelector((state: RootState) => state.userInfo);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState<UserData[]>([]);
    const { isLoggedIn, signIn, signOut } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    // 在组件渲染时检查isLoggedIn状态，如果为false，则打开modal
    useEffect(() => {
        if (!isLoggedIn) {
            setIsModalOpen(true);
        } else {
            fetchData();
           
        }
    }, [isLoggedIn]);

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogin = (username: String, password: String) => {
        // 在这里处理登录逻辑，可以向服务器发送请求等
        console.log('登录成功', username);
        // 在登录成功后，关闭模态框
        closeModal();
    };
    
   
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(e.target.value));
        console.log('Name is:', e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail(e.target.value));
        console.log('Email is:', e.target.value);
    };

    const handleSubmission = () => {
        console.log('userInfo:', userInfo);
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // 如果未登录，打开 modal，否则跳转到下一页
        event.preventDefault();
        console.log('isLoggedIn:', isLoggedIn);
        if (!isLoggedIn) {
            console.log('openModal:openModal');
            openModal();
        } else {
            // 在这里可以使用编程式导航，或者使用 Link 跳转
            console.log('navigate:/react/userapply2');
            navigate('/react/userapply2');
            initialdispatch();
        }
    };

    const firstusername = userData.length > 0 ? userData[0].username : undefined;
    const firstEmail = userData.length > 0 ? userData[0].email : undefined;
    
    const initialdispatch = async () => {
        // 获取保存在本地存储中的令牌

        if (firstusername) {
            // 调用navigate函数
            dispatch(updateName(firstusername));
        } else {
            // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
            console.error('firstusername is undefined');
        }

        if (firstEmail) {
            // 调用navigate函数
            dispatch(updateEmail(firstEmail));
        } else {
            // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
            console.error('firstEmail is undefined');
        }
    };
    const rootElement = document.getElementById('root');
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.flowImage)}></div>
            <div className={classNames(styles.FormRow)}></div>
            <div className={styles.FromArea}>
                <div className={classNames(styles.FormRow)}>
                    <Form.Control
                        type="text"
                        placeholder={firstusername}
                        value={userInfo.name}
                        readOnly={true}
                        onChange={handleNameChange}
                    />
                </div>
                <div className={classNames(styles.FormRow)}></div>
                <div className={classNames(styles.FormRow)}></div>

                <div className={classNames(styles.FormRow)}>
                    <Form.Control
                        type="text"
                        placeholder={firstEmail}
                        value={userInfo.email}
                        readOnly={true}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className={classNames(styles.FormRow)}></div>
                <div className={classNames(styles.FormRow)}></div>
                <div className={classNames(styles.FormRow)}>
                    <a href="https://zhiyouyuec.com"> <Button variant="primary">Cancel</Button>{' '}</a>
                    <Link to="/react/userapply2" onClick={handleLinkClick}>
                        <Button variant="primary">Next page</Button>{' '}
                    </Link>
                </div>
            </div>
            <div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal Dialog"
                    ariaHideApp={true}
                    shouldCloseOnOverlayClick={true}
                    style={modalStyles} // 设置模态框的样式
                   
                >
                    {/* 在模态框中渲染 Login 组件 */}
                    <SignCard redirectLink="/react/userapply" onLogin={handleLogin} />
                </Modal>
            </div>
        </div>
    );
};
