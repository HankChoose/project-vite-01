import classNames from 'classnames';
import styles from './sign-card.module.scss';
import { useFormik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export interface SignCardProps {
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


const handleSignIn = (values: FormikValues) => {
    // Logic for handling sign-in form submission
    console.log('Handling sign-in form submission:', values);
    // Add code to submit data for sign-in
};

const handleSignUp = (values: FormikValues) => {
    // Logic for handling sign-up form submission
    console.log('Handling sign-up form submission:', values);
    // Add code to submit data for sign-up
};

const handleResetPassword = (values: FormikValues) => {
    // Logic for handling reset password form submission
    console.log('Handling reset password form submission:', values);
    // Add code to submit data for reset password
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignCard = ({ className, formType = 'signin' }: SignCardProps) => {

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
                    <div className={classNames(styles.FormRow)}> <a href="https://zhiyouyuec.com">Home</a></div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
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
                </form>
            </div>
        </div>
    );
};
