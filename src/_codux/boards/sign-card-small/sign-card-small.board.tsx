import { createBoard } from '@wixc3/react-board';
import { SignCardSmall } from '../../../components/sign-card-small/sign-card-small';
import { AuthProvider } from '../../../AuthContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'SignCardSmall',
    Board: () =><AuthProvider> <Router>  <SignCardSmall /></Router> </AuthProvider> ,
    isSnippet: true,
});
