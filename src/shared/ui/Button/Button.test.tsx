import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';
import { expect, describe, test } from '@jest/globals';

describe('sdsds', () => {
    test('sdsds', () => {
        render(<Button>test</Button>);

        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
