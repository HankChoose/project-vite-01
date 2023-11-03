import classNames from 'classnames';
import styles from './resetpw.module.scss';

export interface ResetpwProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Resetpw = ({ className }: ResetpwProps) => {
    return <div className={classNames(styles.root, className)}>Resetpw</div>;
};
