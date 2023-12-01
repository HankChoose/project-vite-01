import { createBoard } from '@wixc3/react-board';
import { TestList } from '../../../components/test-list/test-list';

export default createBoard({
    name: 'TestList',
    Board: () => <TestList />,
    isSnippet: true,
});
