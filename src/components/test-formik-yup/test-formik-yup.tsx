import classNames from 'classnames';
import styles from './test-formik-yup.module.scss';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

export interface TestFormikYupProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestFormikYup = ({ className }: TestFormikYupProps) => {

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

    return <div className={classNames(styles.root, className)}>
        <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            <Form>
                <div>
                <label htmlFor="email">电子邮件：</label>
                <Field type="text" id="email" name="email"/>
                <ErrorMessage name="email" component="div" className="error" />
                </div>
                
                <div>
                    <label htmlFor="password">密码</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <div>
                    <label htmlFor="confirmPassword">确认密码：</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" />
                    <ErrorMessage name="confirmPassword" component="div" />
                </div>

                <button type="submit">提交</button>
            </Form>
        </Formik>
    
    </div>;
};
