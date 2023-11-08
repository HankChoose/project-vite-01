import { createBoard } from '@wixc3/react-board';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { UserApplyArea } from '../../../components/user-apply-area/user-apply-area';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers/rootReducer'; // 导入根 reducer
const store = createStore(rootReducer); // 创建 Redux store

export default createBoard({
    name: 'UserApplyArea',
    Board: () =>  <Router><Provider store={store}><UserApplyArea /></Provider>  </Router>,
    isSnippet: true,
});
