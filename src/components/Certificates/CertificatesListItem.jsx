import React, { useState } from 'react'; // <-- Импорт useState
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';

import {
  BsFiletypePdf,
  BsBuildings,
  BsCalendar3,
  BsReverseListColumnsReverse,
} from 'react-icons/bs';

export default function CertificatesListItem({ item }) {
  const { t } = useTranslation();

  // Состояние и функции для управления отображением модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <li className="border border-colorBorder dark:border-colorBorderDark rounded-md group overflow-hidden">
      <img
        src={process.env.PUBLIC_URL + item.thumbnail}
        alt={item['name-certificate']}
        className="w-full duration-200 group-hover:scale-110 cursor-pointer"
        onClick={handleOpenModal}
      />
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} width="w-full lg:w-10/12 xl:w-10/12">
          <div className="h-full max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-orange-400 scrollbar-track-gray-400">
            <img
              src={process.env.PUBLIC_URL + item.fullImage}
              alt={item['name-certificate']}
              className="w-full"
            />
          </div>
        </Modal>
      )}
      <div className="px-5 py-5">
        <h3 className="w-full text-lg font-semibold text-textColor dark:text-white mb-4">
          {item['name-certificate']}
        </h3>

        <div className=" flex items-center gap-4 mb-2">
          <BsReverseListColumnsReverse className="text-orange-400" />
          <p className="w-full text-textColor dark:text-white ">{item.description}</p>
        </div>
        <div className=" flex items-center gap-4  mb-2">
          <BsBuildings className="text-orange-400" />
          <p className="w-full text-textColor dark:text-white ">{item['name-school']}</p>
        </div>
        <div className=" flex items-center gap-4 mb-2">
          <BsCalendar3 className="text-orange-400" />
          <span className="text-textColor dark:text-white ">
            {item.startDate} - {item.finishtDate}
          </span>
        </div>
        <div className=" flex items-center gap-4 mb-2">
          <BsFiletypePdf className="text-orange-400" />
          <a
            className="text-textColor dark:text-white  group-hover:text-sky-500"
            href={process.env.PUBLIC_URL + item.linkPDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('resume-page.link-pdf')}
          </a>
        </div>
      </div>
    </li>
  );
}
