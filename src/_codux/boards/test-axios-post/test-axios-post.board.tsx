import { createBoard } from '@wixc3/react-board';
import { TestAxiosPost } from '../../../components/test-axios-post/test-axios-post';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default createBoard({
    name: 'TestAxiosPost',
    Board: () => <Router> <TestAxiosPost /></Router> ,
    isSnippet: true,
});
