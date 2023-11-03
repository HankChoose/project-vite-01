import { createBoard } from '@wixc3/react-board';
import { PaginatedSortableList } from '../../../components/paginated-sortable-list/paginated-sortable-list';

export default createBoard({
    name: 'PaginatedSortableList',
    Board: () => <PaginatedSortableList />,
    isSnippet: true,
});
