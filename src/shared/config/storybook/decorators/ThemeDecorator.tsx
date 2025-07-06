import { Theme } from 'app/providers/ThemeProvider';
import { Decorator } from '@storybook/react'; // correct type from Storybook
import React from 'react';

export const ThemeDecorator = (theme: Theme): Decorator => (StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryFn />
    </div>
);
