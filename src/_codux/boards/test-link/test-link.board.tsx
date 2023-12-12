import { createBoard } from '@wixc3/react-board';
import { TestLink } from '../../../components/test-link/test-link';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default createBoard({
    name: 'TestLink',
    Board: () => <Router><TestLink /></Router>,
    isSnippet: true,
});
