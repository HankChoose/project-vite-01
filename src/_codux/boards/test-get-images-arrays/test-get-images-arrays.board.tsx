import { createBoard } from '@wixc3/react-board';
import { TestGetImagesArrays } from '../../../components/test-get-images-arrays/test-get-images-arrays';

const fileNames = ['20240110_055037_CELPIP1_image_2.jpg', '20240111_030558__20210715144328_image_1.jpg', 'defaultList.png'];

export default createBoard({
    name: 'TestGetImagesArrays',
    Board: () => <TestGetImagesArrays fileNames={fileNames}/>,
    isSnippet: true,
});
