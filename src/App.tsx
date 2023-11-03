import classNames from 'classnames';
import styles from './App.module.scss';
import { SignArea } from './components/sign-area/sign-area';
import { UserApply } from './components/user-apply/user-apply';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'; // 导入根 reducer
const store = createStore(rootReducer); // 创建 Redux store

function App() {

    return (
        <div className={styles.App}>
          <Provider store={store}>
            <div><SignArea /></div>

          </Provider>
        </div>
    );
}

export default App;