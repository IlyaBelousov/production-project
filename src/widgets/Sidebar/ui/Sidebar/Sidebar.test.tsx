import { screen, fireEvent } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe('Test sidebar', () => {
    test('In the document', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Is collapsed', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');

        expect(sidebar).toBeInTheDocument();

        const toggleButton = screen.getByTestId('toggleButton');

        fireEvent.click(toggleButton);

        expect(sidebar).toHaveClass('collapsed');
    });
});
