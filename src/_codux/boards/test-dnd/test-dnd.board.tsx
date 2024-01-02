import { createBoard } from '@wixc3/react-board';
import { TestDnd } from '../../../components/test-dnd/test-dnd';

export default createBoard({
    name: 'TestDnd',
    Board: () => <TestDnd />,
    isSnippet: true,
});
