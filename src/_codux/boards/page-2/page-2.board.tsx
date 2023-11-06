import { createBoard } from '@wixc3/react-board';
import { Page2 } from '../../../components/page-2/page-2';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers/rootReducer'; // 导入根 reducer
const store = createStore(rootReducer); // 创建 Redux store

export default createBoard({
    name: 'Page2',
    Board: () => <Provider store={store}><Page2 /></Provider>,
    isSnippet: true,
});
