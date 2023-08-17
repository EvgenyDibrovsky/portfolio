import React from 'react';
import { useTranslation } from 'react-i18next';
import ModalImage from 'react-modal-image';
import {
  BsFiletypePdf,
  BsBuildings,
  BsCalendar3,
  BsReverseListColumnsReverse,
} from 'react-icons/bs';

export default function CertificatesListItem({ item }) {
  const { t } = useTranslation();

  return (
    <li className="border-2 rounded-md group overflow-hidden">
      <ModalImage
        small={process.env.PUBLIC_URL + item.thumbnail}
        large={process.env.PUBLIC_URL + item.fullImage}
        alt={item['name-certificate']}
        className="w-full duration-200 group-hover:scale-110"
      />
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
