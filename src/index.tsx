import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';

import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import App from './app/App';

import 'shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/StoreProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <Suspense fallback="">
                <ThemeProvider>
                    <StoreProvider>
                        <App />
                    </StoreProvider>
                </ThemeProvider>
            </Suspense>
        </ErrorBoundary>
    </BrowserRouter>,
);
