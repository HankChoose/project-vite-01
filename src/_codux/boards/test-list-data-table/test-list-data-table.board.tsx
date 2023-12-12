import { createBoard } from '@wixc3/react-board';
import { TestListDataTable } from '../../../components/test-list-data-table/test-list-data-table';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export default createBoard({
    name: 'TestListDataTable',
    Board: () =><Router> <TestListDataTable /></Router>,
    isSnippet: true,
});
