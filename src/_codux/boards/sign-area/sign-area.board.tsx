import { createBoard } from '@wixc3/react-board';
import { SignArea } from '../../../components/sign-area/sign-area';

export default createBoard({
    name: 'SignArea',
    Board: () => <SignArea />,
    isSnippet: true,
});
