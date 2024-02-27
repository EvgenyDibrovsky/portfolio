// hooks/useCurrentLanguage.js
import { useTranslation } from 'react-i18next';

const useCurrentLanguage = () => {
  const { i18n } = useTranslation();
  return i18n.language.split('-')[0].toUpperCase();
};
export default useCurrentLanguage;
