import classNames from 'classnames';
import styles from './page-2.module.scss';
import { BrowserRouter as Router, Routes, Route, Link , Outlet } from 'react-router-dom';
import { Test3 } from '../test-3/test-3';
import { Test4 } from '../test-4/test-4';


export interface Page2Props {
    className?: string;
}

export const Page2 = ({ className }: Page2Props) => {
 
    return <div className={classNames(styles.root, className)}>
        <h1>Component-page2</h1> 
        <Link to="/page1">Page1</Link>
        <Outlet />
    </div>;
};