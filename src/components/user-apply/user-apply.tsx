import classNames from 'classnames';
import styles from './user-apply.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useContext,useRef, useEffect, useState, Component } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../../actions/userInfoActions";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants';
import Form from 'react-bootstrap/Form';
import Modal from 'react-modal';
import { useAuth } from '../../AuthContext';
import { SignCard } from '../sign-card/sign-card';

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

    const userInfo = useSelector((state: RootState) => state.userInfo);
    const dispatch = useDispatch();
    const { isLoggedIn, signIn, signOut } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    // 在组件渲染时检查isLoggedIn状态，如果为false，则打开modal
    useEffect(() => {
        if (!isLoggedIn) {
            setIsModalOpen(true);
        }else{
            
        }
    }, [isLoggedIn]);
    
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
        console.log("Name is:", e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail(e.target.value));
        console.log("Email is:", e.target.value);
    };

    const handleSubmission = () => {
        console.log("userInfo:", userInfo);
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // 如果未登录，打开 modal，否则跳转到下一页
        event.preventDefault();
        console.log("isLoggedIn:", isLoggedIn);
        if (!isLoggedIn) {
            console.log("openModal:openModal");
            openModal();
        } else {
            // 在这里可以使用编程式导航，或者使用 Link 跳转
            console.log("navigate:/react/userapply2");
            navigate('/react/userapply2'); 
        }
    };


    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.flowImage)}></div>
        <div className={classNames(styles.FormRow)}></div>
        <div className={styles.FromArea}>
            <div className={classNames(styles.FormRow)}>
                <Form.Control type="text" placeholder="Name" value={userInfo.name} onChange={handleNameChange} />
            </div>
            <div className={classNames(styles.FormRow)}></div>
            <div className={classNames(styles.FormRow)}></div>

            <div className={classNames(styles.FormRow)}>
                <Form.Control type="text" placeholder="Email" value={userInfo.email} onChange={handleEmailChange} />
            </div>
            <div className={classNames(styles.FormRow)}></div>
            <div className={classNames(styles.FormRow)}></div>
            <div className={classNames(styles.FormRow)}><Link to="/react/userapply2" onClick={handleLinkClick}><Button variant="primary">Next page</Button>{' '}</Link></div>
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
               <SignCard onLogin={handleLogin} />
            </Modal>
        </div>
    </div>;
};
