import { createBoard } from '@wixc3/react-board';
import { Resetpw } from '../../../components/resetpw/resetpw';

export default createBoard({
    name: 'Resetpw',
    Board: () => <Resetpw />,
    isSnippet: true,
});
