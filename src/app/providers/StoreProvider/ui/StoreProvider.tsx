import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

type StoreProviderProps = {
    children: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    return (
        <Provider store={createReduxStore(initialState)}>
            {children}
        </Provider>
    );
};
