import { createBoard } from '@wixc3/react-board';
import { UserApplyArea } from '../../../components/user-apply-area/user-apply-area';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers/rootReducer'; // 导入根 reducer
const store = createStore(rootReducer); // 创建 Redux store

export default createBoard({
    name: 'UserApplyArea',
    Board: () => <Provider store={store}><UserApplyArea /></Provider>,
    isSnippet: true,
});
