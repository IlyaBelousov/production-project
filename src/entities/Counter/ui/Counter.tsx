import React from 'react';
import { Button, ThemeButton } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions, counterSelectors } from 'entities/Counter';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(counterSelectors.selectValue);


    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div>
            <h1 data-testid={'counter-value'}>{value}</h1>
            <Button data-testid={'increment-btn'} onClick={increment} theme={ThemeButton.CLEAR}>INCREMENT</Button>
            <Button data-testid={'decrement-btn'} onClick={decrement} theme={ThemeButton.CLEAR}>DECREMENT</Button>
        </div>
    );
};
