import classNames from 'classnames';
import styles from './App.module.scss';
import { SignArea } from './components/sign-area/sign-area';
import { UserApplyArea } from './components/user-apply-area/user-apply-area';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './components/home/home';
import { Page1 } from './components/page-1/page-1';
import { Page2 } from './components/page-2/page-2';
import { FormCard } from './components/form-card/form-card';
import { Test1 } from './components/test-1/test-1';
import { Test2 } from './components/test-2/test-2';
import { Test3 } from './components/test-3/test-3';
import { Test4 } from './components/test-4/test-4';
import React, { useState } from 'react';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { UserApply2 } from './components/user-apply-2/user-apply-2';
import { UserApply } from './components/user-apply/user-apply';
// 导入根 reducer
const store = createStore(rootReducer);

function App() {

    return (
       
        <div className={styles.App}>
        
            <Router>
                <Link to="/react/userapply"> U </Link>
                <Link to="/react/signin"> S </Link>
                <Routes>
                    <Route path="/react" element={<Home />} />
                    <Route path="/react/userapply" element={<Provider store={store}><UserApply /></Provider>} />
                    <Route path="/react/userapply2" element={<Provider store={store}><UserApply2 /></Provider>} />
                    <Route path="/react/signin" element={<FormCard formType="signin" />} />
                    <Route path="/react/signup" element={<FormCard formType="signup" />} />
                    <Route path="/react/resetpw" element={<FormCard formType="resetpw" />} />
                    <Route path="/react/page1" element={<Page1 />}>
                        <Route path="test1" element={<Test1 />} />
                        <Route path="test2" element={<Test2 />} />
                    </Route>
                    <Route path="/react/page2" element={<Page2 />}>
                        <Route path="test3" element={<Test3 />} />
                        <Route path="test4" element={<Test4 />} />
                    </Route>

                </Routes>

            </Router>
        </div>
    );
}

export default App;