import classNames from 'classnames';
import styles from './test-position.module.scss';
import { UserApply } from '../user-apply/user-apply';
import { SignCard } from '../sign-card/sign-card';
import { BrowserRouter as Router } from 'react-router-dom';



export interface TestPositionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const TestPosition = ({ className }: TestPositionProps) => {
    return <div className={classNames(styles.root, className)}>
        Root
        <div className={styles.top}>
            AppTop
        </div>
        <div className={styles.content}>
            App

            <Router> <SignCard /></Router>
        </div>

    </div>;
};
