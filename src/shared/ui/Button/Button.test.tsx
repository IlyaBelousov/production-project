import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';

describe('sdsds', () => {
    test('sdsds', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
