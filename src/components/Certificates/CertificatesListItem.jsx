import React from 'react';
import { BsFiletypePdf } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const CertificatesListItemComponent = ({ item, toggleLightbox }) => {
  const { t } = useTranslation();

  return (
    <li className="relative flex flex-col xl:flex-row h-full shadow-lg rounded-md overflow-hidden group opacity-0 init-animate-1">
      <img
        src={process.env.PUBLIC_URL + item.thumbnail}
        alt={item['name-certificate']}
        className="block w-full xl:w-[31.25rem] h-auto duration-200 group-hover:scale-105 cursor-pointer"
        onClick={toggleLightbox}
        width="500"
        height="281"
      />
      <a
        className="absolute px-2 py-1 top-2 left-0 flex items-center gap-4 text-white text-sm rounded-r-lg shadow-lg -translate-x-[calc(100%-2rem)] duration-200 hover:translate-x-0 bg-green-600/70 hover:bg-green-600 "
        href={process.env.PUBLIC_URL + item.linkPDF}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('resume-page.link-pdf')}
        <BsFiletypePdf className="w-4 h-4 text-white font-bold text-[1.25rem]" />
      </a>
    </li>
  );
};

const CertificatesListItem = React.memo(CertificatesListItemComponent);

export default CertificatesListItem;
