import classNames from 'classnames';
import styles from './test-list.module.scss';

export interface TestListProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestList = ({ className }: TestListProps) => {
    return <div className={classNames(styles.root, className)}>TestList</div>;
};
