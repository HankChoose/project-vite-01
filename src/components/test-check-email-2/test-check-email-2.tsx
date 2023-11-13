import classNames from 'classnames';
import styles from './test-check-email-2.module.scss';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export interface TestCheckEmail2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestCheckEmail2 = ({ className }: TestCheckEmail2Props) => {
    const formik = useFormik({
        initialValues: {
        email: '',
        },
        validationSchema: Yup.object({
        email: Yup.string().email('无效的邮件地址').required('必填项'),
        }),
        onSubmit: async values => {
        try {
            const response = await axios.post('/api/check_user/', { email: values.email });
            if (response.data.exists) {
            alert('用户已存在！');
            } else {
            // 继续处理注册逻辑，可以使用 Axios 发送数据到注册接口
            }
        } catch (error) {
            console.error('Error checking user:', error);
        }
        },
    });
    return <div className={classNames(styles.root, className)}>
    <div className={classNames(styles.FormRow)}> <a href="https://zhiyouyuec.com">Home</a></div>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">邮箱地址:</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <button type="submit">提交</button>
            </form>
    
    </div>;
};
