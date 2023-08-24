import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm/ContactForm';
import { BsPhone } from 'react-icons/bs';
import MetaTags from 'components/MetaTags/MetaTags';
import ContactDetails from 'components/ContactDetails/ContactDetails';
export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('contacts-page.meta-title')} metaDescription={t('contacts-page.meta-description')} />
      <div className="relative flex flex-col lg:flex-row items-center justify-between  gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 ">
        <PageTitle icon={<BsPhone />} title={t('contacts-page.title')} />
        <SubTitle subTitle={t('contacts-page.sub-title')} />
      </div>
      <ContactDetails />
      <ContactForm />
    </>
  );
}
