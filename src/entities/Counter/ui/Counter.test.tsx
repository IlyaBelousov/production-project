import { screen } from '@testing-library/react';
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import React from "react";
import { Counter } from "entities/Counter";

describe('Counter.test', () => {
    test('Counter.test test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('counter-value')).toBeInTheDocument();
    });
});
