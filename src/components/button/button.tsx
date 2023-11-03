import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className, children }: ButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={styles.Button}> {children} </button>
        </div>
    );
};
