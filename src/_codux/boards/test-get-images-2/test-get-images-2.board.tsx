import { createBoard } from '@wixc3/react-board';
import { TestGetImages2 } from '../../../components/test-get-images-2/test-get-images-2';

export default createBoard({
    name: 'TestGetImages2',
    Board: () => <TestGetImages2 />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 624
    }
});
