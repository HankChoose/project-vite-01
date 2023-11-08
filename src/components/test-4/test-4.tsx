import classNames from 'classnames';
import styles from './test-4.module.scss';

export interface Test4Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Test4 = ({ className }: Test4Props) => {
    return <div className={classNames(styles.root, className)}>Test4</div>;
};
