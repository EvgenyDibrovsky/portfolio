import dbCertificate from '../../db/certificates.json';
import CertificatesListItem from './CertificatesListItem';
import AnimateElements from '../Utility/AnimateElements';
import FsLightbox from 'fslightbox-react';
import React, { useState } from 'react';

const CertificatesList = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Новое состояние для индекса

  const toggleLightbox = index => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(!isLightboxOpen);
  };

  const data = dbCertificate
    .map(item => {
      return {
        id: item.certificate.id,
        thumbnail: item.certificate.thumbnail,
        fullImage: item.certificate.fullImage, // Предполагаем, что это массив
        linkPDF: item.certificate.linkPDF,
      };
    })
    .reverse();

  const images = data.map(item => process.env.PUBLIC_URL + item.fullImage);

  return (
    <AnimateElements>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 ">
        {data.map((item, index) => (
          <CertificatesListItem key={item.id} item={item} toggleLightbox={() => toggleLightbox(index)} />
        ))}
        <FsLightbox
          toggler={isLightboxOpen}
          sources={images}
          slide={currentImageIndex + 1} // Устанавливаем активный слайд
        />
      </ul>
    </AnimateElements>
  );
};
export default CertificatesList;
