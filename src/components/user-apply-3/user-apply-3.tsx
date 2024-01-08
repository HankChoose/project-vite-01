import classNames from 'classnames';
import styles from './user-apply-3.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useRef, useState, Component, ChangeEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateApplytype, updateRequirements } from '../../actions/userInfo2Actions';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import { baseUrl } from '../../constants';
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
        uploadedImages: {
            file: null | File;
            fileName: string;
            fileSize: number;
            filePreviewUrl: null | string;
            rotation: number;
        }[];
        mainImageId: number;
    };
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply3 = ({ className }: UserApply3Props) => {
    const userInfo = useSelector((state: RootState) => state.userInfo);
    const userInfo2 = useSelector((state: RootState2) => state.userInfo2);

    console.log('userInfo-1:', userInfo);
    console.log('userInfo2-1:', userInfo2);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate

    const handleSubmission = async () => {
        const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
        console.log('userInfo:', userInfo);
        console.log('userInfo2:', userInfo2);

        const formData = new FormData();

        // 添加普通字段
        formData.append('username', userInfo.name);
        formData.append('email', userInfo.email);
        formData.append('applytype', userInfo2.applytype);
        formData.append('requirements', userInfo2.requirements);

        // 添加文件字段
        userInfo2.uploadedImages.forEach((uploadedImage, index) => {
            // If there is a file, append it to FormData
            if (uploadedImage.file) {
                formData.append(`uploadedImages[${index}]`, uploadedImage.file);
                console.log('uploadedImage.file', uploadedImage.file);
                //const blob = new Blob([uploadedImage.file], { type: uploadedImage.file.type });
                //formData.append(`uploadedImages[${index}]`, blob, uploadedImage.fileName);
            
            }

        });   
 
        // 添加其他字段
        formData.append('mainImageId', userInfo2.mainImageId.toString());
        
        // Logging the FormData entries
        formData.forEach((value, key) => {
            console.log('formData['+key+']', value);
        });
     
        // 发送请求
        axios.post(`${baseUrl}/upload-user-apply/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            }
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error uploading data:', error);
        });
      };

    return (
        <div className={classNames(styles.root, className)}>
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
                    <Link to="/react/userapply2">
                        <Button variant="primary">Previous page</Button>
                    </Link>
                    <Button variant="primary" onClick={handleSubmission}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};
