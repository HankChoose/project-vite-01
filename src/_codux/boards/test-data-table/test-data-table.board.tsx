import { createBoard } from '@wixc3/react-board';
import { TestDataTable } from '../../../components/test-data-table/test-data-table';
const sampleData = [
    { id: '1', demand_type: 'demand_type 1', demand_description: 'Description 1', username: 'hank1', email: 'hank1@example.com' },
    { id: '2', demand_type: 'demand_type 2', demand_description: 'Description 2', username: 'Ray2', email: 'ray2@example.com' },
    { id: '3', demand_type: 'demand_type 3', demand_description: 'Description 3', username: 'hank1', email: 'hank1@example.com' },
    { id: '4', demand_type: 'demand_type 4', demand_description: 'Description 4', username: 'Ray2', email: 'ray2@example.com' },
    { id: '5', demand_type: 'demand_type 5', demand_description: 'Description 5', username: 'hank1', email: 'hank1@example.com' },
    { id: '6', demand_type: 'demand_type 6', demand_description: 'Description 6', username: 'Ray2', email: 'ray2@example.com' },
];
export default createBoard({
    name: 'TestDataTable',
    Board: () => <TestDataTable data={sampleData} />,
    isSnippet: true,
});
