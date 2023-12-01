import { createBoard } from '@wixc3/react-board';
import { TestToken } from '../../../components/test-token/test-token';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'TestToken',
    Board: () =><Router><TestToken /></Router>  ,
    isSnippet: true,
});
