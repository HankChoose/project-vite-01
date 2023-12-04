import { createBoard } from '@wixc3/react-board';
import { TestListSearch } from '../../../components/test-list-search/test-list-search';

export default createBoard({
    name: 'TestListSearch',
    Board: () => <TestListSearch />,
    isSnippet: true,
});
