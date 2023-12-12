import classNames from 'classnames';
import styles from './user-apply-4.module.scss';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import React,{ useState } from 'react';


export interface UserApply4Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply4 = ({ className }: UserApply4Props) => {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/react/testlisdatatable'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return <div className={classNames(styles.root, className)}>UserApply4</div>;
};
