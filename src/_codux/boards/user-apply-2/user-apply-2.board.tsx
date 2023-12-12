import { createBoard } from '@wixc3/react-board';
import { UserApply2 } from '../../../components/user-apply-2/user-apply-2';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers/rootReducer'; // 导入根 reducer
const store = createStore(rootReducer); // 创建 Redux store

export default createBoard({
    name: 'UserApply2',
    Board: () => <Provider store={store}><Router><UserApply2 /></Router></Provider>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 512
    }
});
