import { createBoard } from '@wixc3/react-board';
import { TestPosition } from '../../../components/test-position/test-position';

export default createBoard({
    name: 'TestPosition',
    Board: () => <TestPosition />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 587
    }
});
