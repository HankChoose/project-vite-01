import { createBoard } from '@wixc3/react-board';
import { TopBar } from '../../../components/top-bar/top-bar';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default createBoard({
    name: 'TopBar',
    Board: () => <Router><TopBar /></Router>,
    isSnippet: true,
});
