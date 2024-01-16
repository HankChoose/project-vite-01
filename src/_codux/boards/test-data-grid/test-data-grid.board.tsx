import { createBoard } from '@wixc3/react-board';
import { TestDataGrid } from '../../../components/test-data-grid/test-data-grid';

const sampleData = [
    {
        id: '1',
        apply_type: 'apply_type 1',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank1',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    {
        id: '2',
        apply_type: 'apply_type 2',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank2',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    // ... other data objects
];

export default createBoard({
    name: 'TestDataGrid',
    Board: () => <TestDataGrid data={sampleData} />,
    isSnippet: true,
});
