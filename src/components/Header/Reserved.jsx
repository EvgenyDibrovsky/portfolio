import { useTranslation } from 'react-i18next';

export default function Reserved() {
  const { t } = useTranslation();
  return (
    <p className="text-xs text-center text-black dark:text-textDark">
      {t('footer.rights-reserved')}
    </p>
  );
}
