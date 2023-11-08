import classNames from 'classnames';
import styles from './test-1.module.scss';

export interface Test1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Test1 = ({ className }: Test1Props) => {
    return <div className={classNames(styles.root, className)}>Test1</div>;
};
