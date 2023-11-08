import classNames from 'classnames';
import styles from './test-2.module.scss';

export interface Test2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Test2 = ({ className }: Test2Props) => {
    return <div className={classNames(styles.root, className)}>Test2</div>;
};
