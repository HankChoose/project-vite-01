import { createBoard } from '@wixc3/react-board';
import TestListClass from '../../../components/test-list-class/test-list-class';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'TestListClass',
    Board: () => <Router>  <TestListClass /></Router>  ,
    isSnippet: true,
});
