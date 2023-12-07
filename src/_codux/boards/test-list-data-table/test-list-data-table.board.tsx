import { createBoard } from '@wixc3/react-board';
import { TestListDataTable } from '../../../components/test-list-data-table/test-list-data-table';

export default createBoard({
    name: 'TestListDataTable',
    Board: () => <TestListDataTable />,
    isSnippet: true,
});
