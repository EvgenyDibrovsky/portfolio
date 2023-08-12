import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm/ContactForm';
import { BsPhone } from 'react-icons/bs';

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <PageTitle icon={<BsPhone className="w-6 h-6" />} title={t('contacts-page.title')} />
      <SubTitle subTitle={t('contacts-page.sub-title')} />
      <ContactForm />
    </div>
  );
}
