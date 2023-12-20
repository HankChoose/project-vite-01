import { createBoard } from '@wixc3/react-board';
import { UserApplyArea } from '../../../components/user-apply-area/user-apply-area';

export default createBoard({
    name: 'UserApplyArea',
    Board: () => <UserApplyArea />,
    isSnippet: true,
});
