import { createBoard } from '@wixc3/react-board';
import { TestFunctionComponent } from '../../../components/test-function-component/test-function-component';

export default createBoard({
    name: 'TestFunctionComponent',
    Board: () => <TestFunctionComponent name="John" age={30}/>,
    isSnippet: true,
});
