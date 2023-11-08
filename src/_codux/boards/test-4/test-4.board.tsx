import { createBoard } from '@wixc3/react-board';
import { Test4 } from '../../../components/test-4/test-4';

export default createBoard({
    name: 'Test4',
    Board: () => <Test4 />,
    isSnippet: true,
});
