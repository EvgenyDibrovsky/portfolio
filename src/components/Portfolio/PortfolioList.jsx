import React, { useState } from 'react';
import dbPortfolio from '../../db/portfolio.json';
import { useTranslation } from 'react-i18next';
import PortfolioListItem from './PortfolioListItem';
import Modal from '../Modal/Modal';
import { BsCardText, BsCodeSlash, BsColumnsGap, BsGlobe } from 'react-icons/bs';
import useCurrentLanguage from '../Hooks/useCurrentLanguage';
import AnimateElements from '../../components/Utility/AnimateElements';
import { useSwipeable } from 'react-swipeable';

export default function PortfolioList({ currentFilter }) {
  const { t } = useTranslation();
  const currentLanguage = useCurrentLanguage();

  const data = dbPortfolio
    .map(item => {
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
    })
    .reverse();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (itemData, index) => {
    setModalData(itemData);
    setCurrentItemIndex(index);
    setIsModalOpen(true);
  };
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

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

  if (data.length === 0) {
    return <p className="text-[2rem] text-black dark:text-white text-center">{t('nothing-found')}</p>;
  }

  let filteredData = data;
  if (currentFilter !== 'all') {
    filteredData = data.filter(item => item.type === currentFilter);
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          closeModal={handleCloseModal}
          width="w-11/12 lg:w-8/12 xl:w-6/12"
          showChevrons={true}
          handleNext={handleNextItem}
          handlePrev={handlePrevItem}
          current={currentItemIndex + 1}
          total={filteredData.length}
        >
          <div {...swipeHandlers} className="h-full max-h-[calc(100vh-8rem)]  overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-sky-600 scrollbar-track-gray-400">
            <picture>
              <source srcSet={process.env.PUBLIC_URL + modalData.image_webp} type="image/webp" />
              <source srcSet={process.env.PUBLIC_URL + modalData.image} type="image/jpg" />
              <img src={process.env.PUBLIC_URL + modalData.image} alt={modalData.name} className="mx-auto w-full h-auto" width="800" height="600" />
            </picture>
            <div className="flex flex-col px-5 py-10">
              <h1 className="text-xl font-semibold text-black dark:text-white mb-4">{modalData.name}</h1>
              <div className="border-b py-3 xxl:py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <BsCardText className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                  </div>
                  <p>
                    <strong>{t('portfolio.project-description')}: </strong>
                    {modalData.description}
                  </p>
                </div>
              </div>
              <div className="border-b py-3 xxl:py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <BsCodeSlash className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                  </div>
                  <p>
                    <strong>{t('portfolio.project-participation')}: </strong>
                    {modalData.participation}
                  </p>
                </div>
              </div>
              <div className="border-b py-3 xxl:py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <BsColumnsGap className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                  </div>
                  <p>
                    <strong>{t('portfolio.project-technologies')}: </strong>
                    {modalData.technologies}
                  </p>
                </div>
              </div>

              <div className="flex items-center py-3 xxl:py-4 gap-4">
                <BsGlobe className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textColor dark:text-white hover:underline hover:text-sky-600 text-[1rem] lg:text-[1.25rem] "
                  aria-label={t('portfolio.project-link')}
                >
                  {t('portfolio.project-link')}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <AnimateElements key={currentFilter}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 ">
          {filteredData.map((itemData, index) => (
            <PortfolioListItem key={itemData.id} {...itemData} onCardClick={() => handleOpenModal(itemData, index)} />
          ))}
        </ul>
      </AnimateElements>
    </>
  );
}
