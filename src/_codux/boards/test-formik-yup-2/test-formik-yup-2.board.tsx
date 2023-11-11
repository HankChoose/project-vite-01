import { createBoard } from '@wixc3/react-board';
import { TestFormikYup2 } from '../../../components/test-formik-yup-2/test-formik-yup-2';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default createBoard({
    name: 'TestFormikYup2',
    Board: () =>  <Router><TestFormikYup2 /> </Router>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1152
    }
});
