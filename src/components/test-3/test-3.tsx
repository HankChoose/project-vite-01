import classNames from 'classnames';
import styles from './test-3.module.scss';

export interface Test3Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Test3 = ({ className }: Test3Props) => {
    return <div className={classNames(styles.root, className)}>Test3</div>;
};
