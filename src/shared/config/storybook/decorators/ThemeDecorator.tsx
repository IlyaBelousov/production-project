import { Theme } from 'app/providers/ThemeProvider';
import { Decorator } from '@storybook/react'; // correct type from Storybook
import React from 'react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator => (StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryFn />
    </div>
);
