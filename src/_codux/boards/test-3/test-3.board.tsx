import { createBoard } from '@wixc3/react-board';
import { Test3 } from '../../../components/test-3/test-3';

export default createBoard({
    name: 'Test3',
    Board: () => <Test3 />,
    isSnippet: true,
});
