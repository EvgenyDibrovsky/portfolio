import React, { useState } from 'react';
import dbPortfolio from '../../db/portfolio.json';
import { useTranslation } from 'react-i18next';
import PortfolioListItem from './PortfolioListItem';
import Modal from '../Modal/Modal';
import { BsCardText, BsCodeSlash, BsColumnsGap, BsGlobe } from 'react-icons/bs';
import useCurrentLanguage from '../Hooks/useCurrentLanguage';

export default function PortfolioList({ currentFilter }) {
  const { t } = useTranslation();
  const currentLanguage = useCurrentLanguage();

  const data = dbPortfolio.map(item => {
    const languageSpecificData = item.portfolio[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.portfolio.id,
      image: item.portfolio.image,
      link: item.portfolio.link,
      technologies: item.portfolio.technologies,
      type: item.portfolio.type,
    };
  });

  data.sort((a, b) => a.id - b.id);
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
          <div className="h-full max-h-[calc(100vh-8rem)]  overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-orange-400 scrollbar-track-gray-400">
            <img src={process.env.PUBLIC_URL + modalData.image} alt={modalData.name} className="mx-auto w-full" />
            <div className="flex flex-col justify-start gap-4 px-5 py-10">
              <h1 className="text-xl font-semibold text-black dark:text-white">{modalData.name}</h1>
              <div className="border-b pb-4">
                <div className="flex items-center gap-4 ">
                  <BsCardText className="text-orange-400 text-[1.25rem]" />
                  <h2 className="w-full font-semibold">{t('portfolio.project-description')}</h2>
                </div>
                <p className="w-full">{modalData.description}</p>
              </div>
              <div className="border-b pb-4">
                <div className="flex items-center gap-4">
                  <BsCodeSlash className="text-orange-400 text-[1.25rem]" />
                  <h2 className="w-full font-semibold">{t('portfolio.project-participation')}</h2>
                </div>
                <p className="w-full">{modalData.participation}</p>
              </div>
              <div className="border-b  pb-4">
                <div className="flex items-center gap-4">
                  <BsColumnsGap className="text-orange-400 text-[1.25rem]" />
                  <h2 className="w-full font-semibold">{t('portfolio.project-technologies')}</h2>
                </div>
                <p className="w-full">{modalData.technologies}</p>
              </div>

              <div className="flex items-center gap-4 ">
                <BsGlobe className="text-orange-400 text-[1.25rem]" />
                <a href={modalData.link} target="_blank" rel="noopener noreferrer" className="underline decoration-solid transition-all duration-200 hover:text-blue-400">
                  {t('portfolio.project-link')}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
        {filteredData.map((itemData, index) => (
          <PortfolioListItem key={itemData.id} {...itemData} onCardClick={() => handleOpenModal(itemData, index)} />
        ))}
      </ul>
    </>
  );
}
