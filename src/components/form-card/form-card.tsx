import classNames from 'classnames';
import styles from './form-card.module.scss';
import { FormRow } from '../form-row/form-row';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { Button } from '../button/button';
import React, { useRef, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export interface FormCardProps {
    className?: string;
    children?: React.ReactNode;
    formType?: 'signin' | 'signup' | 'resetpw';
    callbackFunction?: (data: string) => void; // 定义回调函数类型
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const FormCard = ({ className, formType = 'signin', children}: FormCardProps) => {
  

    const linkresetpw =
        formType === 'signin' ? (
            <Link to="/react/resetpw"> Forgot my password </Link>
        ) : (
            <span />
        );

    const linkheader =
        formType === 'signin' ? (
            <span>Need an account?</span>
        ) : (formType === 'signup' || formType === 'resetpw') ? (
            <span>Have an account already?</span>
        ) : (
            <span />
        );

    const linksign =
        formType === 'signin' ? (
             <Link to="/react/signup"> Sign Up </Link>
        ) : (formType === 'signup' || formType === 'resetpw') ? (
            <Link to="/react/signin"> Sign In </Link>
        ) : (
            <span />
        );

    const Inputpwsign =
        (formType === 'signin' || formType === 'signup') ? (
            <Inputpw> Password </Inputpw>
        ) : (<span />
        );

    const Inputpwagian =
        formType === 'signup' ? (
            <Inputpw> Confirm password again </Inputpw>
        ) : (<span />
        );

    const titlecard =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : formType === 'resetpw' ? 'Reset password' : <span />;

    return (

        <div className={classNames(styles.root, className)}>
            <a href="https://zhiyouyuec.com">Home</a>
            {children}
            <h1> {titlecard}</h1>
            {linkheader}<span className={styles.handpoint}>{linksign}</span>
            <FormRow />
            <FormRow children={<Input />} />
            <FormRow />
            {Inputpwsign}
            <span className={styles.handpoint}>{linkresetpw}</span>
            <FormRow />
            {Inputpwagian}
            <FormRow />
            <FormRow children={<Button> {titlecard} </Button>} />

        </div>
    );
};