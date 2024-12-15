import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

export const AppError = () => {
    const { t } = useTranslation();

    const onClick = () => {
        location.reload();
    };
    return (
        <div className={''}>
            {t('somethingWentWrong')}
            <Button onClick={onClick}>
                {t('reloadPage')}
            </Button>
        </div>
    );
};
