import classNames from 'classnames';
import styles from './form-card.module.scss';
import { FormRow } from '../form-row/form-row';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { Button } from '../button/button';
import React, { useRef, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';



export interface FormCardProps {
    className?: string;
    children?: React.ReactNode;
    formType?: 'signin' | 'signup' | 'resetpw';
    callbackFunction?: (data: string) => void; // 定义回调函数类型
}

export const FormCard = ({ className, formType = 'signin', children}: FormCardProps) => {
    
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('无效的邮箱地址').required('必须提供邮箱地址'),
        password: Yup.string()
        .min(6, '密码至少要有6个字符')
        .required('必须提供密码'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], '密码必须匹配')
        .required('必须提供确认密码'),
    });

    const handleSubmit = () => {
        // 在这里处理提交逻辑
        console.log('提交的表单数据：');
    };

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
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className={classNames(styles.root, className)}>
                    <a href="https://zhiyouyuec.com">Home</a>  
                    {children}
                    <h1> {titlecard}</h1>
                    {linkheader}<span className={styles.handpoint}>{linksign}</span>
                    <FormRow />
                    <FormRow children={<Input id="email" name="email" / >} />
                    <ErrorMessage name="email" component="div" className="error" />
                    <FormRow />
                    {Inputpwsign}
                    <span className={styles.handpoint}>{linkresetpw}</span>
                    <ErrorMessage name="password" component="div" />
                    <FormRow />
                    {Inputpwagian}
                     <ErrorMessage name="confirmPassword" component="div" />
                    <FormRow children={<Button> {titlecard} </Button>} />
                </div>      
            </Form>
        </Formik>
    );
};