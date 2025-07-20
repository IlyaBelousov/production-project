import '../../../../app/styles/index.scss';

import { Meta, StoryObj } from '@storybook/react-webpack5';
import { ReactNode } from 'react';

const meta = {} satisfies Meta<ReactNode>;

type Story = StoryObj<typeof meta>

export const StyleDecorator = (story: () => Story) => story();
