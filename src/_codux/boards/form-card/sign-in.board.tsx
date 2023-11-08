import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../components/form-card/form-card';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'Sign-In',
    Board: () => <Router><FormCard /></Router>,
    isSnippet: true,
});
