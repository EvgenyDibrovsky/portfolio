// import PageTitle from 'components/Utility/PageTitle';
// import SubTitle from 'components/Utility/SubTitle';
// import { BsHouseDoor } from 'react-icons/bs';

import { useTranslation } from 'react-i18next';
import Possibilities from 'components/Possibilities/Possibilities';
import WorkingСonditions from 'components/WorkingСonditions/WorkingСonditions';
import SubTitle from 'components/Utility/SubTitle';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <WorkingСonditions />

      {/* <PageTitle icon={<BsHouseDoor />} title={t('home-page.title')} />
      <SubTitle subTitle={t('home-page.sub-title')} /> */}
      <div className="inline-block relative mb-2">
        <SubTitle subTitle={t('possibilities.my-capabilities')} />
        <div className="relative after:block after:content-[''] after:absolute after:bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-orange-400 dark:after:bg-orange-400"></div>
      </div>
      <Possibilities />
    </>
  );
}
