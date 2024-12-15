import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const isLanguageRu = i18n.language === 'ru';
    const changeLanguage = async () => {
        await i18n.changeLanguage(isLanguageRu ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={changeLanguage}
            style={{
                marginLeft: 14,
            }}
        >
            {t('language')}
        </Button>
    );
};
