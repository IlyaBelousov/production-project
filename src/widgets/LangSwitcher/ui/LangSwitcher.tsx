import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui';

export const LangSwitcher = ({ short }:{short?: boolean}) => {
    const { t, i18n } = useTranslation();

    const isLanguageRu = i18n.language === 'ru';
    const changeLanguage = async () => {
        await i18n.changeLanguage(isLanguageRu ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={changeLanguage}
        >
            {t(short ? 'shortLang' : 'language')}
        </Button>
    );
};
