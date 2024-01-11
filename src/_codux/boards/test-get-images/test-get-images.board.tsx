import { createBoard } from '@wixc3/react-board';
import { TestGetImages } from '../../../components/test-get-images/test-get-images';

const imageInfo = '20240110_055037__20210715144321_image_0.jpg';

export default createBoard({
    name: 'TestGetImages',
    Board: () => <TestGetImages imageInfo={imageInfo}/>,
    isSnippet: true,
});
