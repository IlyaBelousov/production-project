import '../../../../app/styles/index.scss';

import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const meta = {} satisfies Meta<ReactNode>;

type Story = StoryObj<typeof meta>

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
