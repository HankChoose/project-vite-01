import { createBoard } from '@wixc3/react-board';
import { UserApply } from '../../../components/user-apply/user-apply';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers/rootReducer'; // 导入根 reducer
const store = createStore(rootReducer); // 创建 Redux store

export default createBoard({
    name: 'UserApply',
    Board: () =>  <Provider store={store}><UserApply /></Provider>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 36
    }
});
