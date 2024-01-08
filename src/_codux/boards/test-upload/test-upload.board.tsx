import { createBoard } from '@wixc3/react-board';
import { TestUpload } from '../../../components/test-upload/test-upload';

export default createBoard({
    name: 'TestUpload',
    Board: () => <TestUpload />,
    isSnippet: true,
});
