import classNames from 'classnames';
import styles from './not-found.module.scss';

export interface NotFoundProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NotFound = ({ className }: NotFoundProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
