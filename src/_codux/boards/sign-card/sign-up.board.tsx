import { createBoard } from '@wixc3/react-board';
import { SignCard } from '../../../components/sign-card/sign-card';
import { AuthProvider } from '../../../AuthContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default createBoard({
    name: 'SignUp',
    Board: () => <AuthProvider><Router> <SignCard formType="signup" /></Router></AuthProvider>,
    isSnippet: true,
    environmentProps: {
        windowHeight: 635
    }
});
