import { createBoard } from '@wixc3/react-board';
import { TestAxiosPost3 } from '../../../components/test-axios-post-3/test-axios-post-3';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'TestAxiosPost3',
    Board: () =><Router> <TestAxiosPost3 /></Router>  ,
    isSnippet: true,
});
