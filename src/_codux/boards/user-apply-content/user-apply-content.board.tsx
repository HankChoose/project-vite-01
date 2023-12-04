import { createBoard } from '@wixc3/react-board';
import { UserApplyContent } from '../../../components/user-apply-content/user-apply-content';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'UserApplyContent',
    Board: () =><Router><UserApplyContent /></Router>  ,
    isSnippet: true,
});
