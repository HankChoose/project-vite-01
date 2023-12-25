import { createBoard } from '@wixc3/react-board';
import { TestRequest } from '../../../components/test-request/test-request';

export default createBoard({
    name: 'TestRequest',
    Board: () => <TestRequest />,
    isSnippet: true,
});
