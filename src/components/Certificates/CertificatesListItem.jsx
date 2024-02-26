import React, { useState } from 'react'; // <-- Импорт useState
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import { BsFiletypePdf } from 'react-icons/bs';

export default function CertificatesListItem({ item }) {
  const { t } = useTranslation();

  // Состояние и функции для управления отображением модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <li className="relative z-10 flex flex-col xl:flex-row h-full shadow-lg rounded-md overflow-hidden group opacity-0 init-animate-1">
      <img
        src={process.env.PUBLIC_URL + item.thumbnail}
        alt={item['name-certificate']}
        className="block w-full xl:w-[31.25rem] h-auto duration-200 group-hover:scale-105 cursor-pointer"
        onClick={handleOpenModal}
        width="500"
        height="281"
      />
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} width="w-11/12 lg:w-10/12 xl:w-10/12">
          <div className="relative flex flex-col h-full max-h-[calc(100vh-5rem)] overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-sky-600 scrollbar-track-gray-400">
              <img src={process.env.PUBLIC_URL + item.fullImage} alt={item['name-certificate']} className="w-full" width="1000" height="562" />
            </div>

            <a
              className="absolute top-20 left-0 py-2 px-4 flex items-center gap-4 text-white  text-[1rem] lg:text-[1.25rem] -translate-x-[calc(100%-3.5rem)] duration-200 hover:translate-x-0 bg-green-600/70 hover:bg-green-600 "
              href={process.env.PUBLIC_URL + item.linkPDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('resume-page.link-pdf')}
              <BsFiletypePdf className="w-6 h-6 text-white font-bold text-[1.25rem]" />
            </a>
          </div>
        </Modal>
      )}
    </li>
  );
}
