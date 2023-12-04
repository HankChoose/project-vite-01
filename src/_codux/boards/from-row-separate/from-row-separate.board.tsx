import { createBoard } from '@wixc3/react-board';
import { FromRowSeparate } from '../../../components/from-row-separate/from-row-separate';

export default createBoard({
    name: 'FromRowSeparate',
    Board: () => <FromRowSeparate />,
    isSnippet: true,
});
