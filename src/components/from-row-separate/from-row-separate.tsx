import classNames from 'classnames';
import styles from './from-row-separate.module.scss';

export interface FromRowSeparateProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FromRowSeparate = ({ className , children }: FromRowSeparateProps) => {
    return <div className={classNames(styles.root, className)}> {children}</div>;
};
