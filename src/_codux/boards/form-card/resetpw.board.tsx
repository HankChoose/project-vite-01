import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../components/form-card/form-card';

export default createBoard({
    name: 'Resetpw',
    Board: () => <FormCard formType="resetpw" />,
    isSnippet: true,
});
