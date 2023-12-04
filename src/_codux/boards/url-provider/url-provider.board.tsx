import { createBoard } from '@wixc3/react-board';
import { UrlProvider } from '../../../components/url-provider/url-provider';

export default createBoard({
    name: 'UrlProvider',
    Board: () => <UrlProvider />,
    isSnippet: true,
});
