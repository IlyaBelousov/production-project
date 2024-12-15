import React, { useEffect, useState } from 'react';
import { Button, OptionalRender } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './TriggerExceptionButton.module.scss';

// For tests
export const TriggerExceptionButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    console.log('BIS styles.triggerButton', styles.triggerButton);
    const onClick = () => {
        setError(true);
    };
    return (
        <OptionalRender condition={__IS_DEV__}>
            <Button className={styles.triggerButton} onClick={onClick}>
                {t('triggerBug')}
            </Button>
        </OptionalRender>
    );
};
