import React from 'react';
import { Loader } from 'shared/ui';
import styles from './PageLoader.module.scss';

export const PageLoader = () => (
    <div className={styles.container}>
        <Loader />
    </div>
);
