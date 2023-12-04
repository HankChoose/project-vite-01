import { createBoard } from '@wixc3/react-board';
import { FromRowRight } from '../../../components/from-row-right/from-row-right';

export default createBoard({
    name: 'FromRowRight',
    Board: () => <FromRowRight />,
    isSnippet: true,
});
