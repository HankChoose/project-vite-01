import classNames from 'classnames';
import styles from './user-apply-content.module.scss';
import { useParams } from 'react-router-dom';
import {baseUrl} from '../../constants';

export interface UserApplyContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApplyContent = ({ className }: UserApplyContentProps) => {
    const {id}= useParams();
    const apiUrl = `${baseUrl}/user-apply-content/${id}`;

    return <div className={classNames(styles.root, className)}>
        <h2>User Apply Content ID: {id}</h2>
        <h3>apiUrl: {apiUrl}</h3>
    </div>;
};
