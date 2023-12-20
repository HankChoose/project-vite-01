import { createBoard } from '@wixc3/react-board';
import { UserProfile } from '../../../components/user-profile/user-profile';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'UserProfile',
    Board: () => <Router> <UserProfile /></Router>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5,
        windowHeight: 598
    }
});
