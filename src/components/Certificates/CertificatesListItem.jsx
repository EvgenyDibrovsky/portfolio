import React, { useState } from 'react'; // <-- Импорт useState
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';
import { BsFiletypePdf, BsBuildings, BsCalendar3, BsReverseListColumnsReverse } from 'react-icons/bs';

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
          <div className="flex flex-col h-full max-h-[calc(100vh-5rem)]">
            <div className="h-full  overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-sky-600 scrollbar-track-gray-400">
              <img src={process.env.PUBLIC_URL + item.fullImage} alt={item['name-certificate']} className="w-full" width="1000" height="562" />
            </div>
            <div className="flex flex-col justify-between w-full px-4 lg:px-8 py-6 bg-white dark:bg-neutral-800">
              <h3 className="w-full h-auto text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-4">{item['name-certificate']}</h3>
              <div>
                <div className=" flex items-center gap-4 border-b py-2 xxl:py-4">
                  <BsReverseListColumnsReverse className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                  <p className="w-full text-textColor dark:text-white text-[1rem] lg:text-[1.25rem] ">{item.description}</p>
                </div>
                <div className=" flex items-center gap-4 border-b py-2 xxl:py-4">
                  <BsBuildings className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                  <p className="w-full text-textColor dark:text-white text-[1rem] lg:text-[1.25rem] ">{item['name-school']}</p>
                </div>
                <div className=" flex items-center gap-4 border-b py-2 xxl:py-4">
                  <BsCalendar3 className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                  <span className="text-textColor dark:text-white text-[1rem] lg:text-[1.25rem] ">
                    {item.startDate} - {item.finishtDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2 xxl:py-4">
                <BsFiletypePdf className="w-6 h-6 text-sky-600 text-[1.25rem]" />
                <a
                  className="text-textColor dark:text-white hover:underline hover:text-sky-600 text-[1rem] lg:text-[1.25rem] "
                  href={process.env.PUBLIC_URL + item.linkPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('resume-page.link-pdf')}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </li>
  );
}
