import { createBoard } from '@wixc3/react-board';
import { UserApply4 } from '../../../components/user-apply-4/user-apply-4';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default createBoard({
    name: 'UserApply4',
    Board: () =><Router> <UserApply4 /></Router>,
    isSnippet: true,
});
