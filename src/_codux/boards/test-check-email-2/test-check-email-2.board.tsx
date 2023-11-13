import { createBoard } from '@wixc3/react-board';
import { TestCheckEmail2 } from '../../../components/test-check-email-2/test-check-email-2';

export default createBoard({
    name: 'TestCheckEmail2',
    Board: () => <TestCheckEmail2 />,
    isSnippet: true,
});
