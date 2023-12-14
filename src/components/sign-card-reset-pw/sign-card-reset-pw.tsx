import classNames from 'classnames';
import styles from './sign-card-reset-pw.module.scss';
import { useFormik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';

export interface SignCardResetPWProps {
    className?: string;
    formType?: 'signin' | 'signup' | 'resetpw';
}


const validationSchemaSignin = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password required'),

});

const validationSchemaSignup = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password agian required'),
});

const validationSchemaResetpw = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^\-]*$/, 'Password cannot contain special characters--')
        .required('Email address is required'),

});

const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

const handleSignIn = (values: FormikValues) => {
    // Logic for handling sign-in form submission
    console.log('Handling sign-in form submission:', values);
    // Add code to submit data for sign-in
    //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
    const userData = {
      username: values.email,
      password: values.password,
      // 添加要发送给Django的数据
    };
    
    console.log('Handling sign-in form userData:', userData);
    axios.post("/accounts/login/", userData)
    .then(response => {
        // 处理成功响应
        console.log('成功',response.data);
    })
    .catch(error => {
        // 处理错误
         console.error('失败', error);
    });
};

const handleSignUp = (values: FormikValues) => {
    // Logic for handling sign-up form submission
    console.log('Handling sign-up form submission:', values);
    // Add code to submit data for sign-up
  
    const csrftoken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrftoken='))?.split('=')[1];
    // Set the CSRF token in the headers of the Axios request
    const userData = {
      username: values.email,
      password: values.password,
      password2: values.password,
      // 添加要发送给Django的数据
    };
    console.log('Handling sign-up form userData:', userData);
    try {
      // 设置CSRF令牌作为请求头
      const config = {
        headers: {
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
          'Referer': 'https://zhiyouyuec.com'
        },
      };
      axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
      const response = axios.post('/accounts/signup/', userData,config);
      console.log('Response from Django:');
    } catch (error) {
      //console.error(error);
      console.error('Error sending data to Django:', error);
    }
};

const handleResetPassword = (values: FormikValues) => {
    // Logic for handling reset password form submission
    console.log('Handling reset password form submission:', values);
    // Add code to submit data for reset password
    //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
    axios.post("/accounts/password/change/", values)
    .then(response => {
        // 处理成功响应
        console.log('成功',response.data);
    })
    .catch(error => {
        // 处理错误
        console.error('失败', error);
    });
};


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignCardResetPW = ({ className, formType = 'resetpw' }: SignCardResetPWProps) => {
    
    const validationSchema =
        formType === 'signin' ? (
            validationSchemaSignin
        ) : (formType === 'signup') ? (
            validationSchemaSignup
        ) : (formType === 'resetpw') ? (
            validationSchemaResetpw
        ) : (
            <span />
        );

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

    const titlecard =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : formType === 'resetpw' ? 'Reset password' : <span />;


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (formType === 'signin') {
                handleSignIn(values);
            } else if (formType === 'signup') {
                handleSignUp(values);
            } else if (formType === 'resetpw') {
                handleResetPassword(values);
            }
        },
    });

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (

        <div className={classNames(styles.root)}>
            <div className={styles.FromArea}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={classNames(styles.FormRow)}><h1> {titlecard}</h1></div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
                    <div className={classNames(styles.FormRow)}>{linkheader}{linksign}</div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
                    <div>
                        <div className={classNames(styles.FormRow)}>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={classNames(styles.Input)}
                            />
                        </div>
                        <div className={classNames(styles.FormRow)}>
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* 添加其他字段的输入和验证显示 */}

                    {formType === 'signin' || formType === 'signup' ? (
                        <div>
                            <div className={classNames(styles.FormRow)}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className={classNames(styles.Inputpw)}
                                />
                                <button onClick={togglePasswordVisibility} className={styles.ButtonSee}>
                                    {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
                                </button>
                            </div>
                            <div className={classNames(styles.FormRow)}>
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>
                    ) : null}

                    {formType === 'signup' ? (
                        <div>
                            <div className={classNames(styles.FormRow)}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Password again"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                    className={classNames(styles.Inputpw)}
                                />
                                <button onClick={togglePasswordVisibility} className={styles.ButtonSee}>
                                    {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
                                </button>
                            </div>
                            <div className={classNames(styles.FormRow)}>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div>{formik.errors.confirmPassword}</div>
                                ) : null}
                            </div>
                        </div>
                    ) : null}

                    <div className={classNames(styles.FormRow)}>
                        <button type="submit" className={styles.ButtonSubmit}>
                            {titlecard}
                        </button>
                     </div>
                    <div className={classNames(styles.FormRowSmall)}>{linkresetpw}</div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
                </form>
            </div>
        </div>
    );
};

