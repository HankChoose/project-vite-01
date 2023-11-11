import classNames from 'classnames';
import styles from './test-formik-yup-2.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export interface TestFormikYup2Props {
    className?: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
    .matches(/^[^\-]*$/, 'Password cannot contain special characters--')
    .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters').required('Password required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Password agian required'),
});

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestFormikYup2 = ({ className }: TestFormikYup2Props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // 在这里处理表单提交到后端的逻辑
            console.log('Form values submitted:', values);
            // 在这里添加将数据提交到后端的代码
        },
    });

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
  
        <div className={classNames(styles.root)}>
            
            <form onSubmit={formik.handleSubmit}>
              <div className={classNames(styles.FormRow)}> <a href="https://zhiyouyuec.com">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/react/signin"> Sign In </Link></div>
              
              <div className={classNames(styles.FormRow)}><h1>Sign Up</h1></div>
              <div className={classNames(styles.FormRow)}></div>
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

                <button type="submit" className={styles.ButtonSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};
