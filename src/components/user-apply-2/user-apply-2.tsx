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
        axios.post("/create", userInfoArray)
        .then(response => {
        // 处理成功响应
        })
        .catch(error => {
        // 处理错误
        });
    };

    
    return <div className={classNames(styles.root, className)}>
        <div className={styles.FromArea}>
            <div className={classNames(styles.FormRow)}> <a href="https://zhiyouyuec.com">Home</a></div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}> </div>
             <div className={classNames(styles.FormRow)}>
                <select value={userInfo2.applytype} className={classNames(styles.Input)} onChange={handleApplytypeChange}><option>Apple</option><option>Banana</option><option>Watermelon</option></select>
            </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}>
                <input type="text" className={classNames(styles.Input)} placeholder="Requirements" value={userInfo2.requirements} onChange={handleRequirementsChange} />
            </div>
            <div className={classNames(styles.FormRow)}> </div>
             <div className={classNames(styles.FormRow)}>
               <Link to="/react/userapply">Previous page</Link>
                <button onClick={handleSubmission}>Submit</button>
            </div>         
          
        </div>

    </div>;
};
