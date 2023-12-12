import { createBoard } from '@wixc3/react-board';
import { TestNavigate } from '../../../components/test-navigate/test-navigate';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default createBoard({
    name: 'TestNavigate',
    Board: () =><Router> <TestNavigate /></Router>,
    isSnippet: true,
});
