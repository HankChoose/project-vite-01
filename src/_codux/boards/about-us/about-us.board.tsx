import { createBoard } from '@wixc3/react-board';
import { AboutUS } from '../../../components/about-us/about-us';

export default createBoard({
    name: 'AboutUS',
    Board: () => <AboutUS />,
    isSnippet: true,
});
