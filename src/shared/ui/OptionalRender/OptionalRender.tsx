import React, { ReactElement } from 'react';

export const OptionalRender = (props:{
    condition: boolean
    children: ReactElement
}): ReactElement => {
    const { condition, children } = props;

    return condition ? children : null;
};
