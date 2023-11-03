import classNames from 'classnames';
import styles from './inputpw.module.scss';
import React, { useState } from 'react';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';

export interface InputpwProps {
    className?: string;
    children?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Inputpw = ({ className, children }: InputpwProps) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder= {children}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.Input}
            />
            <button onClick={togglePasswordVisibility} className={styles.Button}>
                {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
            </button>
        </div>
    );
};
