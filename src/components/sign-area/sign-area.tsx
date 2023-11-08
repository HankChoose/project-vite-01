import classNames from 'classnames';
import styles from './sign-area.module.scss';
import { FormCard } from '../form-card/form-card';
import { Resetpw } from '../resetpw/resetpw';
import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export interface SignAreaProps {
    className?: string;
}

function GotoSignup() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/signup'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
    <div></div>
  );
}

function GotoSignin() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/signin'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
     <div></div>
    );
}

function GotoResetpw() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/resetpw'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
    <div></div>
    );
}

export const SignArea = ({ className }: SignAreaProps) => {

    const [isInternalControlClicked, setInternalControlClicked] = useState('');
    const handleInternalControlClick = (value: string) => {
        // 当内部控件被点击时，更新状态变量
        setInternalControlClicked(value);
    };

    return <div className={classNames(styles.root, className)}>
       
     
            {isInternalControlClicked === "signup" ? <GotoSignup /> : <GotoSignin />}
            {isInternalControlClicked === "signin" ? <GotoSignin /> : <GotoSignin />}
            {isInternalControlClicked === "resetpw" ? <GotoResetpw /> : <GotoSignin />}
            <div>
                <Routes>
                    <Route
                        path="/signin"
                        element={
                            <FormCard
                                formType="signin"
                                callbackFunction={handleInternalControlClick}
                            />
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <FormCard
                                formType="signup"
                                callbackFunction={handleInternalControlClick}
                            />
                        }
                    />

                    <Route
                    path="/resetpw"
                    element={
                            <FormCard
                                formType="resetpw"
                                callbackFunction={handleInternalControlClick}
                            />
                        }
                    />
                
                </Routes>
            </div>
    
    </div>;
};