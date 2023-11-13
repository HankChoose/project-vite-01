import { createBoard } from '@wixc3/react-board';
import { TestCheckEmail } from '../../../components/test-check-email/test-check-email';

export default createBoard({
    name: 'TestCheckEmail',
    Board: () => <TestCheckEmail />,
    isSnippet: true,
});
