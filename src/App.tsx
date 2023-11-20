import classNames from 'classnames';
import styles from './App.module.scss';
import { UserApplyArea } from './components/user-apply-area/user-apply-area';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './components/home/home';
import { Page1 } from './components/page-1/page-1';
import { Page2 } from './components/page-2/page-2';
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
import { SignCard } from './components/sign-card/sign-card';
import { TestCheckEmail } from './components/test-check-email/test-check-email';
import { TestCheckEmail2 } from './components/test-check-email-2/test-check-email-2';
import { TestAxiosPost } from './components/test-axios-post/test-axios-post';
import { TestAxiosPost2 } from './components/test-axios-post-2/test-axios-post-2';

// 导入根 reducer
const store = createStore(rootReducer);

function App() {

    return (

        <div className={styles.App}>

            <Router>
                <Link to="/react/userapply"> U </Link>
                <Link to="/react/signin"> S </Link>
                <Link to="/react/checkemail"> E1 </Link>
                <Link to="/react/checkemail2"> E2 </Link>
                <Link to="/react/testaxiospost"> TA </Link>
                <Link to="/react/testaxiospost2"> TA2 </Link>
                <Routes>
                    <Route path="/react" element={<Home />} />
                    <Route path="/react/userapply" element={<Provider store={store}><UserApply /></Provider>} />
                    <Route path="/react/userapply2" element={<Provider store={store}><UserApply2 /></Provider>} />
                    <Route path="/react/signin" element={<SignCard formType="signin" />} />
                    <Route path="/react/signup" element={<SignCard formType="signup" />} />
                    <Route path="/react/resetpw" element={<SignCard formType="resetpw" />} />
                    <Route path="/react/checkemail" element={<TestCheckEmail />} />
                    <Route path="/react/checkemail2" element={<TestCheckEmail2 />} />
                    <Route path="/react/testaxiospost" element={<TestAxiosPost />} />
                    <Route path="/react/testaxiospost2" element={<TestAxiosPost2 />} />
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