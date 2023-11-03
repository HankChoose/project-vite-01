import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserApply } from './components/user-apply/user-apply';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'; // 导入根 reducer
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
