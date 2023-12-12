import classNames from 'classnames';
import styles from './user-apply-3.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useRef, useState, Component, ChangeEvent } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { updateApplytype, updateRequirements } from "../../actions/userInfo2Actions";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';

import Cookies from 'js-cookie';
import {baseUrl} from '../../constants';
import Table from 'react-bootstrap/Table';


export interface UserApply3Props {
    className?: string;
    //callbackFunction?: (data: string) => void; // 定义回调函数类型
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
export const UserApply3 = ({ className }: UserApply3Props) => {
    const userInfo = useSelector((state:RootState) => state.userInfo);
    const userInfo2 = useSelector((state: RootState2) => state.userInfo2);

    console.log("userInfo-1:",userInfo);
    console.log("userInfo2-1:",userInfo2);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate

    const handleSubmission = async () => {
        const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
        console.log("userInfo:",userInfo);
        console.log("userInfo2:",userInfo2);
      
        const requestData = { 
            username: userInfo.name,
            email: userInfo.email,
            demand_type: userInfo2.applytype,
            demand_description:userInfo2.requirements
        };

        console.log("requestData:",requestData);
        //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
        // Set the CSRF token in the headers of the Axios request
        const config = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            },
            body: JSON.stringify(requestData),
        };

        const apiUrl = `${baseUrl}/user-demand-create/`;
        
        try {
            const response = await axios.post(apiUrl, requestData,config);
            if (response.status === 200) {
                navigate('/react/userapply4'); // 在 useEffect 中调用 navigate
            } else {
                console.error('Login failed');
            }
        console.log(response.data);
        } catch (error) {
        console.error('Error creating user:', error);
        }
    };

    
    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.flowImage3)}></div>
        <div className={styles.FromArea}>
           <Table bordered>
            <thead>
            <tr>
            <th>Item</th>
            <th>Detail</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>Name:</td>
                <td>{userInfo.name}</td>
                </tr>
                <tr>
                <td>Email:</td>
                <td>{userInfo.email}</td>
                </tr>
                <tr>
                <td>Type</td>
                <td>{userInfo2.applytype}</td>
                </tr>
                <tr>
                <td>Comment</td>
                <td>{userInfo2.requirements}</td>
                </tr>
            </tbody>
            </Table>
            <div className={classNames(styles.FormRow)}> </div>
             <div className={classNames(styles.FormRow)}>  
                <Button variant="primary"  onClick={handleSubmission}>Submit</Button>
                <Link to="/react/userapply2"><Button variant="primary">Previous page</Button></Link>
               
            </div>         
          
        </div>

        

    </div>;
};
