import '../../../../app/styles/index.scss';

import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
