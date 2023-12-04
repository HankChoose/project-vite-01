import { createBoard } from '@wixc3/react-board';
import { TestBootstrap } from '../../../components/test-bootstrap/test-bootstrap';

export default createBoard({
    name: 'TestBootstrap',
    Board: () => <TestBootstrap />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5
    }
});
