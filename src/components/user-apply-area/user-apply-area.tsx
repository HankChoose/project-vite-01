import classNames from 'classnames';
import styles from './user-apply-area.module.scss';
import { UserApply } from '../user-apply/user-apply';
import { UserApply2 } from '../user-apply-2/user-apply-2';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';


export interface UserApplyAreaProps {
    className?: string;
}

function GotoPage1() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/page1'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
        <div></div>
    );
}

function GotoPage2() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/page2'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
        <div></div>
    );
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const UserApplyArea = ({ className }: UserApplyAreaProps) => {

    const [isInternalControlClicked, setInternalControlClicked] = useState('');
    const handleInternalControlClick = (value: string) => {
        // 当内部控件被点击时，更新状态变量
        setInternalControlClicked(value);
    };

    return <div className={classNames(styles.root, className)}>
        
        {isInternalControlClicked === "page1" ? <GotoPage1 /> : <GotoPage1 />}
        {isInternalControlClicked === "page2" ? <GotoPage2 /> : <GotoPage1 />}
        
        <Routes>
            <Route
                path="/page1/*"
                element={
                    <UserApply
                    callbackFunction={handleInternalControlClick}
                    />
                }
            />
            <Route
                path="/page2/*"
                element={
                    <UserApply2 
                    callbackFunction={handleInternalControlClick} 
                />
                    
                }
            />
        </Routes>

    </div>;
};
