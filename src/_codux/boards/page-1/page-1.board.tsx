import { createBoard } from '@wixc3/react-board';
import { Page1 } from '../../../components/page-1/page-1';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
export default createBoard({
    name: 'Page1',
    Board: () =>  <Router><Page1 /> </Router>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024
    }
});
