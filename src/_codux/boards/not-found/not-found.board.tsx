import { createBoard } from '@wixc3/react-board';
import { NotFound } from '../../../components/not-found/not-found';

export default createBoard({
    name: 'NotFound',
    Board: () => <NotFound />,
    isSnippet: true,
});
