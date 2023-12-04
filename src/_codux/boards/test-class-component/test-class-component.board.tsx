import { createBoard } from '@wixc3/react-board';
import TestClassComponent from '../../../components/test-class-component/test-class-component';

export default createBoard({
    name: 'TestClassComponent',
    Board: () => <TestClassComponent name="John" age={30} />,
    isSnippet: true,
});
