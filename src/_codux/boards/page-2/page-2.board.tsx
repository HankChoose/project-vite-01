import { createBoard } from '@wixc3/react-board';
import { Page2 } from '../../../components/page-2/page-2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default createBoard({
    name: 'Page2',
    Board: () => <Router><Page2 /></Router>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 36,
        canvasWidth: 40
    }
});
