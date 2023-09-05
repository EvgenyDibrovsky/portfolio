import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm/ContactForm';
import { BsPhone } from 'react-icons/bs';
import MetaTags from 'components/MetaTags/MetaTags';
import ContactDetails from 'components/ContactDetails/ContactDetails';
import WrapperTitle from 'components/Utility/WrapperTitle';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY;

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('contacts-page.meta-title')} metaDescription={t('contacts-page.meta-description')} />
      <WrapperTitle>
        <PageTitle icon={<BsPhone />} title={t('contacts-page.title')} />
        <SubTitle subTitle={t('contacts-page.sub-title')} />
      </WrapperTitle>
      <ContactDetails />
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
        <ContactForm />
      </GoogleReCaptchaProvider>
    </>
  );
}
