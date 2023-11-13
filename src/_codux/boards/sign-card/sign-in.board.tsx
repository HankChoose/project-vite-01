import { createBoard } from '@wixc3/react-board';
import { SignCard } from '../../../components/sign-card/sign-card';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'SignIn',
    Board: () =><Router> <SignCard /></Router> ,
    isSnippet: true,
});
