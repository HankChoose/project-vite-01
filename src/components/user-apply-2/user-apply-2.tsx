import classNames from 'classnames';
import styles from './user-apply-2.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useRef, useState, Component, ChangeEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateApplytype, updateRequirements } from "../../actions/userInfo2Actions";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {baseUrl} from '../../constants';
import Form from 'react-bootstrap/Form';

export interface UserApply2Props {
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
export const UserApply2 = ({ className}: UserApply2Props) => {

    const userInfo = useSelector((state:RootState) => state.userInfo);
    const userInfo2 = useSelector((state: RootState2) => state.userInfo2);
    console.log("userInfo-1:",userInfo);
    console.log("userInfo2-1:",userInfo2);
    const dispatch = useDispatch();
   
    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateApplytype(e.target.value));
        console.log("Applytype is:", e.target.value);
    }

    const handleRequirementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateRequirements(e.target.value));
        console.log("Requirements is:", e.target.value);
    };

    userInfo2.applytype="React";
    
    
    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.flowImage2)}></div>
        <div className={styles.FromArea}>
            <div className={classNames(styles.FormRow)}> </div>
                <div className={classNames(styles.FormRow)}>
                    
                    <Form.Select 
                        aria-label="Default select example"
                        value={userInfo2.applytype} 
                        className={classNames(styles.Input)} 
                        onChange={handleApplytypeChange}>
                        <option value="React">React</option>
                        <option value="Django">Django</option>
                        <option value="Web">Web</option>
                        <option value="Nginx">Nginx</option>
                    </Form.Select>
                </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}>
              <Form.Control as="textarea" rows={3} placeholder="Requirements" value={userInfo2.requirements} onChange={handleRequirementsChange} />
            </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}> </div>
             <div className={classNames(styles.FormRow)}> 
               <Link to="/react/userapply3"><Button variant="primary">Next page</Button></Link> 
               <Link to="/react/userapply"><Button variant="primary">Previous page</Button></Link>    
            </div>         
          
        </div>

    </div>;
};
