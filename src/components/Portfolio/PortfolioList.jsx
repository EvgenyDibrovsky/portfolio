import React, { useState, useMemo } from 'react';
import dbPortfolio from '../../db/portfolio.json';
import { useTranslation } from 'react-i18next';
import PortfolioListItem from './PortfolioListItem';
import PortfolioModal from './PortfolioModal';
import { BsCardText, BsCodeSlash, BsColumnsGap, BsGlobe } from 'react-icons/bs';
import useCurrentLanguage from '../Hooks/useCurrentLanguage';
import AnimateElements from '../../components/Utility/AnimateElements';
import { useSwipeable } from 'react-swipeable';

const PortfolioList = ({ currentFilter }) => {
  const { t } = useTranslation();
  const currentLanguage = useCurrentLanguage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  const handleOpenModal = (itemData, index) => {
    setModalData(itemData);
    setCurrentItemIndex(index);
    setIsModalOpen(true);
  };

  const handleNextItem = () => {
    const nextIndex = currentItemIndex + 1;
    if (nextIndex < filteredData.length) {
      handleOpenModal(filteredData[nextIndex], nextIndex);
    }
  };

  const handlePrevItem = () => {
    const prevIndex = currentItemIndex - 1;
    if (prevIndex >= 0) {
      handleOpenModal(filteredData[prevIndex], prevIndex);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextItem(),
    onSwipedRight: () => handlePrevItem(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  const filteredData = useMemo(() => {
    const languageFilteredData = dbPortfolio.map(item => {
      const languageSpecificData = item.portfolio[currentLanguage];
      return {
        ...languageSpecificData,
        id: item.portfolio.id,
        image: item.portfolio.image,
        image_webp: item.portfolio.image_webp,
        link: item.portfolio.link,
        technologies: item.portfolio.technologies,
        type: item.portfolio.type,
      };
    });

    if (currentFilter === 'all') {
      return languageFilteredData.reverse();
    }
    return languageFilteredData.filter(item => item.type === currentFilter).reverse();
  }, [currentLanguage, currentFilter]);

  if (filteredData.length === 0) {
    return <p className="text-[2rem] text-black dark:text-white text-center">{t('nothing-found')}</p>;
  }

  return (
    <>
      {isModalOpen && (
        <PortfolioModal closeModal={handleCloseModal} showChevrons={true} handleNext={handleNextItem} handlePrev={handlePrevItem} current={currentItemIndex + 1} total={filteredData.length}>
          <div {...swipeHandlers} className="max-h-[90dvh] overflow-y-auto">
            <div className="aspect-auto h-full w-full">
              <picture>
                <source srcSet={process.env.PUBLIC_URL + modalData.image_webp} type="image/webp" />
                <source srcSet={process.env.PUBLIC_URL + modalData.image} type="image/jpg" />
                <img src={process.env.PUBLIC_URL + modalData.image} alt={modalData.name} className="w-full h-full" width="800" height="600" />
              </picture>
            </div>
            <div className="flex flex-col px-8 py-6 bg-white dark:bg-neutral-800 ">
              <h1 className="text-sm sm:text-xl font-semibold text-black dark:text-white mb-4">{modalData.name}</h1>
              <div className="border-b border-neutral-300 dark:border-neutral-600 py-3 xxl:py-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div>
                    <BsCardText className="w-5 h-5 text-sky-600 dark:text-sky-500 text-[1.25rem]" />
                  </div>
                  <p className="text-sm sm:text-[1rem]">
                    <strong>{t('portfolio.project-description')}: </strong>
                    {modalData.description}
                  </p>
                </div>
              </div>
              <div className="border-b border-neutral-300 dark:border-neutral-600 py-3 xxl:py-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div>
                    <BsCodeSlash className="w-5 h-5 text-sky-600 dark:text-sky-500 text-[1.25rem]" />
                  </div>
                  <p className="text-sm sm:text-[1rem]">
                    <strong>{t('portfolio.project-participation')}: </strong>
                    {modalData.participation}
                  </p>
                </div>
              </div>
              <div className="border-b border-neutral-300 dark:border-neutral-600 py-3 xxl:py-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div>
                    <BsColumnsGap className="w-5 h-5 text-sky-600 dark:text-sky-500 text-[1.25rem]" />
                  </div>
                  <p className="text-sm sm:text-[1rem]">
                    <strong>{t('portfolio.project-technologies')}: </strong>
                    {modalData.technologies}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center py-3 xxl:py-4 gap-4">
                <BsGlobe className="w-5 h-5 text-sky-600 dark:text-sky-500 text-[1.25rem]" />
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textColor dark:text-white hover:underline hover:text-sky-600 text-sm sm:text-[1rem]"
                  aria-label={t('portfolio.project-link')}
                >
                  {t('portfolio.project-link')}
                </a>
              </div>
            </div>
          </div>
        </PortfolioModal>
      )}

      <AnimateElements key={currentFilter}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
          {filteredData.map((itemData, index) => (
            <PortfolioListItem key={itemData.id} {...itemData} onCardClick={() => handleOpenModal(itemData, index)} />
          ))}
        </ul>
      </AnimateElements>
    </>
  );
};

export default PortfolioList;
