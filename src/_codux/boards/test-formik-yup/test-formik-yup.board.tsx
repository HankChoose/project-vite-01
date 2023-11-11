import { createBoard } from '@wixc3/react-board';
import { TestFormikYup } from '../../../components/test-formik-yup/test-formik-yup';

export default createBoard({
    name: 'TestFormikYup',
    Board: () => <TestFormikYup />,
    isSnippet: true,
});
