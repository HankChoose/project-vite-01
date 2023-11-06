import classNames from 'classnames';
import styles from './page-1.module.scss';
import { UserApply } from '../user-apply/user-apply';
import rootReducer from '../../reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export interface Page1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
// 导入根 reducer
const store = createStore(rootReducer);
export const Page1 = ({ className }: Page1Props) => {
    return <div className={classNames(styles.root, className)}>
        <Provider store={store}><UserApply /></Provider>Page1</div>;
};
