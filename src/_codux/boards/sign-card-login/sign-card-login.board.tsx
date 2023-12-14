import { createBoard } from '@wixc3/react-board';
import { SignCardLogin } from '../../../components/sign-card-login/sign-card-login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'SignCardLogin',
    Board: () =><Router> <SignCardLogin /></Router>,
    isSnippet: true,
});
