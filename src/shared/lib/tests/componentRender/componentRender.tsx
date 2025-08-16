import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { ThemeProvider } from "app/providers/ThemeProvider";
import i18nForTests from "shared/config/tests/i18nForTests";


export interface componentRenderOptions {
    route?: string;
    initialState?: StateSchema;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <ThemeProvider>
                    <I18nextProvider i18n={i18nForTests}>
                        {component}
                    </I18nextProvider>
                </ThemeProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
