import { createBoard } from '@wixc3/react-board';
import { TestGallery } from '../../../components/test-gallery/test-gallery';

export default createBoard({
    name: 'TestGallery',
    Board: () => <TestGallery />,
    isSnippet: true,
});
