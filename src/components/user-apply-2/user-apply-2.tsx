import classNames from 'classnames';
import styles from './user-apply-2.module.scss';
import React, { useRef, useState, Component, ChangeEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateApplytype, updateRequirements } from "../../actions/userInfo2Actions";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export interface UserApply2Props {
    className?: string;
    callbackFunction?: (data: string) => void; // 定义回调函数类型
}
type RootState = {
    userInfo: {
        name: string;
        email: string;
    };
};

type RootState2 = {
    userInfo2: {
        applytype: string;
        requirements: string;
    };
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply2 = ({ className}: UserApply2Props) => {

    const userInfo = useSelector((state:RootState) => state.userInfo);
    const userInfo2 = useSelector((state: RootState2) => state.userInfo2);
    const userInfoArray = [userInfo, userInfo2];
    console.log("userInfo-1:",userInfo);
    console.log("userInfo2-1:",userInfo2);
    console.log("userInfoArray-1:",userInfoArray);
    const dispatch = useDispatch();

    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateApplytype(e.target.value));
        console.log("Applytype is:", e.target.value);
    }

    const handleRequirementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateRequirements(e.target.value));
        console.log("Requirements is:", e.target.value);
    };

    const handleSubmission = () => {
        console.log("userInfo:",userInfo);
        console.log("userInfo2:",userInfo2);
        console.log("userInfoArray:",userInfoArray);
        axios.post("/api/submit", userInfoArray)
        .then(response => {
        // 处理成功响应
        })
        .catch(error => {
        // 处理错误
        });
    };

    
    return <div className={classNames(styles.root, className)}>
        <div>
            <select value={userInfo2.applytype} onChange={handleApplytypeChange}><option>Apple</option><option>Banana</option><option>Watermelon</option></select>
            <input type="text" placeholder="Requirements" value={userInfo2.requirements} onChange={handleRequirementsChange} />
           <Link to="/userapply">Previous page</Link>
            <Link to="/">Cancle</Link>
           <button onClick={handleSubmission}>Submit</button>
        </div>

    </div>;
};
