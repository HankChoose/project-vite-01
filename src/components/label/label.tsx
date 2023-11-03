import classNames from 'classnames';
import styles from './label.module.scss';

export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
    htmlFor?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Label = ({ className, children, htmlFor }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label htmlFor={htmlFor} className={styles.Label}> {children} </label>
        </div>
    );
};
