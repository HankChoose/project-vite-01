import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1144,
        canvasHeight: 973,
        windowHeight: 529,
        canvasWidth: 1142
    }
});
