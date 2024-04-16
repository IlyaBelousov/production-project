import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
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

export default LangSwitcher;
