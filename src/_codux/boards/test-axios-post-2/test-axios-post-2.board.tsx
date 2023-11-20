import { createBoard } from '@wixc3/react-board';
import { TestAxiosPost2 } from '../../../components/test-axios-post-2/test-axios-post-2';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'TestAxiosPost2',
    Board: () =><Router>  <TestAxiosPost2 /></Router> ,
    isSnippet: true,
});
