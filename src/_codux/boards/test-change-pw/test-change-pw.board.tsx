import { createBoard } from '@wixc3/react-board';
import { TestChangePW } from '../../../components/test-change-pw/test-change-pw';

export default createBoard({
    name: 'TestChangePW',
    Board: () => <TestChangePW />,
    isSnippet: true,
});
