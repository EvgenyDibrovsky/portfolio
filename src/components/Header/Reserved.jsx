import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Reserved = ({ closeHeader }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-2 text-center">
        <Link to="/privacy-policy" onClick={closeHeader} className="text-sm  text-black dark:text-textColorDark duration-200 hover:underline hover:text-sky-600  dark:hover:text-sky-600 ">
          {t('privacy-policy.title')}
        </Link>
      </div>
      <p className="text-xs text-center text-black dark:text-textColorDark">{t('footer.rights-reserved')}</p>
    </div>
  );
};
export default Reserved;
