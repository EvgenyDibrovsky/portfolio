import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm/ContactForm';
import { BsPhone } from 'react-icons/bs';
import MetaTags from 'components/MetaTags/MetaTags';

export default function ContactPage() {
  const { t } = useTranslation();
  console.log(MetaTags);
  return (
    <>
      <MetaTags metaTitle={t('contacts-page.meta-title')} metaDescription={t('contacts-page.meta-description')} />
      <PageTitle icon={<BsPhone />} title={t('contacts-page.title')} />
      <SubTitle subTitle={t('contacts-page.sub-title')} />
      <ContactForm />
    </>
  );
}
