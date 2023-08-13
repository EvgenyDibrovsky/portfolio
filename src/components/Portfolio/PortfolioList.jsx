import React, { useState } from 'react';
import dbPortfolio from '../../db/portfolio.json';
import { useTranslation } from 'react-i18next';
import PortfolioListItem from './PortfolioListItem';
import Modal from '../Modal/Modal';

export default function PortfolioList() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  const data = dbPortfolio.map(item => {
    const languageSpecificData = item.portfolio[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.portfolio.id,
      image: item.portfolio.image,
      link: item.portfolio.link,
    };
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = itemData => {
    setModalData(itemData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  if (data.length === 0) {
    return (
      <p className="text-[2rem] text-black dark:text-white text-center">{t('nothing-found')}</p>
    );
  }

  return (
    <>
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} width="w-11/12 lg:w-8/12 xl:w-6/12">
          <div className="h-[90vh] overflow-y-auto">
            <img
              src={process.env.PUBLIC_URL + modalData.image}
              alt={modalData.name}
              className="mx-auto w-full"
            />
            <div className=" px-5 py-10">
              <h1>{modalData.name}</h1>
              <p>{modalData.description}</p>
              <p>{modalData.technologies}</p>
              <p>{modalData.participation}</p>
              <a href={modalData.link} target="_blank" rel="noopener noreferrer">
                Посетить сайт проекта
              </a>
            </div>
          </div>
        </Modal>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
        {data.map(itemData => (
          <PortfolioListItem
            key={itemData.id}
            {...itemData}
            onCardClick={() => handleOpenModal(itemData)}
          />
        ))}
      </ul>
    </>
  );
}
