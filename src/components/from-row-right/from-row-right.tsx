import classNames from 'classnames';
import styles from './from-row-right.module.scss';

export interface FromRowRightProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FromRowRight = ({ className , children }: FromRowRightProps) => {
    return <div className={classNames(styles.root, className)}> {children} </div>;
};
