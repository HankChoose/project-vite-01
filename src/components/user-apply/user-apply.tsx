import classNames from 'classnames';
import styles from './user-apply.module.scss';
import React, { useRef, useState, Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail} from "../../actions/userInfoActions";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
export interface UserApplyProps {
    className?: string;
    callbackFunction?: (data: string) => void; // 定义回调函数类型
}

type RootState = {
    userInfo: {
        name: string;
        email: string;
    };
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply = ({ className}: UserApplyProps) => {

    const userInfo = useSelector((state:RootState) => state.userInfo);
    const dispatch = useDispatch();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(e.target.value));
        console.log("Name is:",e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail(e.target.value));
        console.log("Email is:",e.target.value);
    };

    const handleSubmission = () => {
        console.log("userInfo:",userInfo);
    };

  
    return <div className={classNames(styles.root, className)}>
        <div>
        <input type="text" placeholder="Name" value={userInfo.name} onChange={handleNameChange} />
        <input type="text" placeholder="Email" value={userInfo.email} onChange={handleEmailChange} />
       
        <Link to="/userapply2">Next page</Link>
        <Link to="/">Cancle</Link>
       
        </div>
    </div>;
};
