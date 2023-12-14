import { createBoard } from '@wixc3/react-board';
import { SignCardResetPW } from '../../../components/sign-card-reset-pw/sign-card-reset-pw';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'SignCardResetPW',
    Board: () =><Router> <SignCardResetPW /></Router>,
    isSnippet: true,
});
