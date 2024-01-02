import classNames from 'classnames';
import styles from './sign-card.module.scss';
import { useFormik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import {  axios_form_data_post, axios_json_data_post,axios_json_data_get  } from '../../apiService';

export interface SignCardProps {
    className?: string;
    formType?: 'signin' | 'signup' | 'resetpw';
    onLogin?: (email: string, password: string) => void; // Specify void as the return type
    redirectLink?: string | undefined;
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



/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignCard = ({ className, formType = 'signin', redirectLink, onLogin }: SignCardProps) => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginStatus, setLoginStatus] = useState<string | null>(null);
    const [emailExistenceStatus, setEmailExistenceStatus] = useState<string | null>(null);
    const [emailExistAfter, setemailExistAfter] = useState(false);
    const { isLoggedIn, signIn, signOut } = useAuth();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();
    //-------------------------------------------------------->>handleSignIn
    const handleSignIn = async (values: FormikValues) => {
        // Logic for handling sign-in form submission
        console.log('Handling sign-in form submission:', values);
        // Add code to submit data for sign-in

        const apiUrl = `/user-token/`;
        const userData = {
            username: values.email,
            password: values.password,
            // 添加要发送给Django的数据
        };
        console.log('Handling sign-in form userData:', userData);
        try {
            const data = await axios_json_data_post(apiUrl,userData);
            if (data.error){
                console.log('GET Response sign fail data.message:', data.message);
                const loginSuccess = false;/* 模拟请求返回的值 */ 
                setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
            }else{
                console.log('GET Response sign OK:', data);
                localStorage.setItem('accessToken', data.token);
                console.log('GET Response.data.token',data.token);
                const loginSuccess = true;/* 模拟请求返回的值 */ 
                setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
                // 在这里进行你的其他操作，比如存储在本地存储中
                signIn();
                if (onLogin) {
                    onLogin(values.email,values.password);
                } else {
                    // Handle the case where onLogin is not defined, if needed
                    console.error('onLogin is not defined');
                }
                if (redirectLink) {
                    // 调用navigate函数
                    navigate(redirectLink);
                } else {
                    // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
                    console.error('redirectLink is undefined');
                }
            }
        } catch (error) {
            // 处理错误
            console.error('handleSignIn error:', error);
             const loginSuccess = false;/* 模拟请求返回的值 */ 
            setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
        }
    };

    //------------------------------------------------------->handleSignUp
    const handleSignUp =async (values: FormikValues) => {
        // Logic for handling sign-up form submission
        console.log('Handling sign-up form submission:', values);
        // Add code to submit data for sign-up

        const apiUrl = `/accounts/signup/`;
      
        // Split the email address at the "@" symbol
        const parts = values.email.split('@');

        const userData = {
            username: parts[0],
            email: values.email,
            password1: values.password,
            password2: values.password,
            // 添加要发送给Django的数据
        };
        console.log('Handling sign-up form userData:', userData);

        try {
            const data = await axios_form_data_post(apiUrl,userData,'multipart/form-data');
            if (data.error){
                console.log('GET Response signup failed data.message:', data.message);
            }else{
                console.log('GET Response Signup OK:', data);
                const apiUrl2 = `/user-token/`;
                 const userData2 = {
                    username: values.email,
                    password: values.password,
                    // 添加要发送给Django的数据
                };

                const data2 = await axios_json_data_post(apiUrl2,userData2);
                if (data2.error){
                    console.log('GET Response signup get token fail data.message:', data.message);
                    const loginSuccess = false;/* 模拟请求返回的值 */ 
                   
                }else{
                    console.log('GET Response signup get token OK:', data2);
                    localStorage.setItem('accessToken', data2.token);
                    console.log('GET Response.data2.token',data2.token);
                    // 在这里进行你的其他操作，比如存储在本地存储中
                    signIn();
                    if (onLogin) {
                        onLogin(values.email,values.password);
                    } else {
                        // Handle the case where onLogin is not defined, if needed
                        console.error('onLogin is not defined');
                    }
                    if (redirectLink) {
                        // 调用navigate函数
                        navigate(redirectLink);
                    } else {
                        // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
                        console.error('redirectLink is undefined');
                    }
                }

            }
        } catch (error) {
            // 处理错误
            console.error('handleSignUp error:', error);
        }
    };

    //------------------------------------------------------>heckEmailExistence
    const checkEmailExistence = async (values: FormikValues) => {
        const apiUrl = `/check-email-exist/${values.email}/`; 
        try {
            const data = await axios_json_data_get(apiUrl);
            if (data.error){
                console.log('GET Response Password reset email sent: failed data.message:', data.message);
            }else{
                console.log('GET Response Password reset email sent:', data);
                const exists = data.exists;
                if (exists === true) {
                // 邮箱存在的情况下的处理逻辑
                console.log('Email exists!');
                // 执行下一步操作...
                const emailExists = true;/* 模拟请求返回的值 */ 
                setEmailExistenceStatus(emailExists ? 'The email already in use. click Forgot my password of Sign in to verify the email' : '');
                setemailExistAfter(emailExists);
            } else if (exists === false) {
                // 邮箱不存在的情况下的处理逻辑
                console.log('Email does not exist!');
                // 执行下一步操作...
                // 执行下一步操作...
                const emailExists = false;/* 模拟请求返回的值 */ 
                setEmailExistenceStatus(emailExists ? 'The email already in use. click Forgot my password of Sign in to verify the email' : '');
                setemailExistAfter(emailExists);
                //handleSignUp(values);
            } else {
                // 数据尚未加载或加载过程中的处理逻辑
                console.log('Loading data...');
            }
            }
        } catch (error) {
            // 处理错误
            console.error('checkEmailExistence error:', error);
        } 
    };

    //------------------------------------------------------>handleResetPassword
    const handleResetPassword =async (values: FormikValues) => {
        // Logic for handling reset password form submission
        console.log('Handling reset password form submission:', values);
        // Add code to submit data for reset password
        //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
        const userData = {
            email: values.email,
        };
        const apiUrl = `/accounts/password/reset/`;
        try {
            const data = await axios_form_data_post(apiUrl,userData,'application/x-www-form-urlencoded');
            if (data.error){
                console.log('GET Response Password reset email sent: failed data.message:', data.message);
            }else{
                console.log('GET Response Password reset email sent:', data);
                if (onLogin) {
                    onLogin(values.email,values.password);
                } else {
                    // Handle the case where onLogin is not defined, if needed
                    console.error('onLogin is not defined');
                }
            }
        } catch (error) {
            // 处理错误
            console.error('handleResetPassword error:', error);
        }   
    };

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
               
                checkEmailExistence(values);
                if (emailExistAfter === true) {
                    // 邮箱存在的情况下的处理逻辑
                    console.log('Hank:Email exists!');
                } else {
                    console.log('Hank:Email not exists!');
                    handleSignUp(values);
                    
                } 
            
                    
            } else if (formType === 'resetpw') {
                handleResetPassword(values);
            }
        },
    });

    return (

        <div className={classNames(styles.root)}>
            <div className={styles.FromArea}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={classNames(styles.FormRow)}><h1> {titlecard}</h1></div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
                    <div className={classNames(styles.FormRow)}>{linkheader}{linksign}</div>
                    <div className={classNames(styles.FormRow)}>
                        <div className={classNames(styles.ErrorsArea)}>
                            {loginStatus !== null && <p>{loginStatus}</p>}
                            {emailExistenceStatus !== null && <p>{emailExistenceStatus}</p>}
                        </div>
                    </div>
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
                                <div className={classNames(styles.ErrorsArea)}>{formik.errors.email}</div>
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
                                    <div className={classNames(styles.ErrorsArea)}>{formik.errors.password}</div>
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
                                    <div className={classNames(styles.ErrorsArea)}>{formik.errors.confirmPassword}</div>
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
