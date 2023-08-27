import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Reserved() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-2">
        <Link to="/term-of-use-page" className="text-sm underline text-center text-black dark:text-textColorDark hover:text-sky-500  dark:hover:text-sky-500 ">
          {t('term-of-use-page.title')}
        </Link>
      </div>
      <p className="text-xs text-center text-black dark:text-textColorDark">{t('footer.rights-reserved')}</p>
    </div>
  );
}
