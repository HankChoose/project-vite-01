import { createBoard } from '@wixc3/react-board';
import { Test1 } from '../../../components/test-1/test-1';

export default createBoard({
    name: 'Test1',
    Board: () => <Test1 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 42
    }
});
