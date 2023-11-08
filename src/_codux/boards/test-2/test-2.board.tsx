import { createBoard } from '@wixc3/react-board';
import { Test2 } from '../../../components/test-2/test-2';

export default createBoard({
    name: 'Test2',
    Board: () => <Test2 />,
    isSnippet: true,
});
