import classNames from 'classnames';
import styles from './page-1.module.scss';
import { RouteObject } from 'react-router-dom';
import { Test1 } from '../test-1/test-1';
import { Test2 } from '../test-2/test-2';
import { BrowserRouter as Router, Routes, Route, Link , Outlet } from 'react-router-dom';

export interface Page1Props {
    className?: string;
}

export const Page1 = ({ className }: Page1Props) => {

    return <div className={classNames(styles.root, className)}>
        <h1>Component-page1</h1>
        <Link to="/react/page1/test1">Test1</Link>
        <Link to="/react/page1/test2">Test2</Link>
        <Outlet />
    </div>;
};