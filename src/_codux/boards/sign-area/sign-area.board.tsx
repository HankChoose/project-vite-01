import { createBoard } from '@wixc3/react-board';
import { SignArea } from '../../../components/sign-area/sign-area';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default createBoard({
    name: 'SignArea',
    Board: () => <Router><SignArea /></Router>,
    isSnippet: true,
});
