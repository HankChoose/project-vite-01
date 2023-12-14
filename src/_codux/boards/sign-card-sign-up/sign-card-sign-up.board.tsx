import { createBoard } from '@wixc3/react-board';
import { SignCardSignUp } from '../../../components/sign-card-sign-up/sign-card-sign-up';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'SignCardSignUp',
    Board: () =><Router>  <SignCardSignUp /></Router> ,
    isSnippet: true,
});
