import classNames from 'classnames';
import styles from './App.module.scss';
import { AuthProvider } from './AuthContext';
import Modal from 'react-modal';
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
import { TestAxiosPost3 } from './components/test-axios-post-3/test-axios-post-3';
import { UserProfile } from './components/user-profile/user-profile';
import { TestToken } from './components/test-token/test-token';
import { TestList } from './components/test-list/test-list';
import { UserApplyContent } from './components/user-apply-content/user-apply-content';
import { TestListDataTable } from './components/test-list-data-table/test-list-data-table';
import { TopBar } from './components/top-bar/top-bar';
import { UserApply3 } from './components/user-apply-3/user-apply-3';
import { TestLink } from './components/test-link/test-link';
import { TestNavigate } from './components/test-navigate/test-navigate';
import { UserApply4 } from './components/user-apply-4/user-apply-4';
import { TestChangePW } from './components/test-change-pw/test-change-pw';
import { TestRequest } from './components/test-request/test-request';
import { TestUpload } from './components/test-upload/test-upload';
import { TestGetImages } from './components/test-get-images/test-get-images';
import { TestGetImages2 } from './components/test-get-images-2/test-get-images-2';
import { TestGetImagesArrays } from './components/test-get-images-arrays/test-get-images-arrays';
import { AboutUS } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
//import { TopbarProvider } from './TopbarContext';
// 导入根 reducer
const store = createStore(rootReducer);
const fileNames = ['20240110_055037_CELPIP1_image_2.jpg', '20240111_030558__20210715144328_image_1.jpg', 'defaultList.png'];

function App() {

    return (
        <AuthProvider>
            <div className={styles.root}>
                <Router>
                    <div className={styles.AppTop}>
                        <TopBar />
                    </div>
                    <div className={styles.App}>
                        <Routes>
                            <Route path="/react" element={<Home />} />
                            <Route path="/react/aboutus" element={ <AboutUS />} />
                            <Route path="/react/contactus" element={<ContactUs />} />
                            <Route path="/react/signin" element={<SignCard formType="signin" redirectLink='/react/userprofile' />} />
                            <Route path="/react/signup" element={<SignCard formType="signup" redirectLink='/react/userprofile' />} />
                            <Route path="/react/resetpw" element={<SignCard formType="resetpw" redirectLink='/react/userprofile' />} />
                            <Route path="/react/userapply" element={<Provider store={store}><UserApply /></Provider>} />
                            <Route path="/react/userapply2" element={<Provider store={store}><UserApply2 /></Provider>} />
                            <Route path="/react/userapply3" element={<Provider store={store}><UserApply3 /></Provider>} />
                            <Route path="/react/userapply4" element={<UserApply4 />} />
                            <Route path="/react/userprofile" element={<UserProfile />} />
                            <Route path="/react/checkemail" element={<TestCheckEmail />} />
                            <Route path="/react/checkemail2" element={<TestCheckEmail2 />} />
                            <Route path="/react/userapplycontent/:id" element={<UserApplyContent />} />
                            <Route path="/react/testtoken" element={<TestToken />} />
                            <Route path="/react/testlist" element={<TestList />} />
                            <Route path="/react/testlink" element={<TestLink />} />
                            <Route path="/react/testnavigate" element={<TestNavigate />} />
                            <Route path="/react/testchangepw" element={<TestChangePW />} />
                            <Route path="/react/testaxiospost" element={<TestAxiosPost />} />
                            <Route path="/react/testaxiospost2" element={<TestAxiosPost2 />} />
                            <Route path="/react/testaxiospost3" element={<TestAxiosPost3 />} />
                            <Route path="/react/testrequest" element={<TestRequest />} />
                            <Route path="/react/testlisdatatable" element={<TestListDataTable />} />
                            <Route path="/react/testupload" element={<TestUpload />} />
                            <Route path="/react/testgetimages" element={<TestGetImages />} />
                            <Route path="/react/testgetimages2" element={<TestGetImages2 />} />
                            <Route path="/react/testgetimagesarrays" element={<TestGetImagesArrays fileNames={fileNames} />} />
                           
                            <Route path="/react/page1" element={<Page1 />}>
                                <Route path="test1" element={<Test1 />} />
                                <Route path="test2" element={<Test2 />} />
                            </Route>
                            <Route path="/react/page2" element={<Page2 />}>
                                <Route path="test3" element={<Test3 />} />
                                <Route path="test4" element={<Test4 />} />
                            </Route>
                        </Routes>

                    </div>

                </Router>
            </div>
  
        </AuthProvider>
    );

}

export default App;