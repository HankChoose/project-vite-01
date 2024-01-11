import { createBoard } from '@wixc3/react-board';
import { TestListDataTable } from '../../../components/test-list-data-table/test-list-data-table';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

interface Data {
  id: string;
  apply_type: string;
  requirements: string;
  username: string;
  email: string;
  image_path_main: string;
  apply_time: Date; // Change the type to Date
  comment: string;
  comment2: string;
  [key: string]: string | Date; // Adjust the index signature if needed
  // Other properties...
}

export default createBoard({
    name: 'TestListDataTable',
    Board: () =><Router> <TestListDataTable /></Router>,
    isSnippet: true,
});
