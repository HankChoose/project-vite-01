import { createBoard } from '@wixc3/react-board';
import { ContactUs } from '../../../components/contact-us/contact-us';

export default createBoard({
    name: 'ContactUs',
    Board: () => <ContactUs />,
    isSnippet: true,
});
