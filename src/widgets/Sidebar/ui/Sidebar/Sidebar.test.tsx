import { screen, fireEvent } from '@testing-library/react';
import { expect, describe, test } from '@jest/globals';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Test sidebar', () => {
    test('In the document', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Is collapsed', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');

        expect(sidebar).toBeInTheDocument();

        const toggleButton = screen.getByTestId('toggleButton');

        fireEvent.click(toggleButton);

        expect(sidebar).toHaveClass('collapsed');
    });
});
