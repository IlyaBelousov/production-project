import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import React from "react";
import { Counter } from "entities/Counter";


describe('Counter.test', () => {
    test('Counter.test test', () => {
        componentRender(<Counter />, {
            //@ts-ignore
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('counter-value')).toBeInTheDocument();
    });
    test('Counter.test increment', () => {
        componentRender(<Counter />, {
            //@ts-ignore
            initialState: { counter: { value: 10 } }
        })
        fireEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });
    test('Counter.test decrement', () => {
        componentRender(<Counter />, {
            //@ts-ignore
            initialState: { counter: { value: 10 } }
        })
        fireEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
