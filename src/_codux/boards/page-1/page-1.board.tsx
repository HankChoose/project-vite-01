import { createBoard } from '@wixc3/react-board';
import { Page1 } from '../../../components/page-1/page-1';

export default createBoard({
    name: 'Page1',
    Board: () => <Page1 />,
    isSnippet: true,
});
