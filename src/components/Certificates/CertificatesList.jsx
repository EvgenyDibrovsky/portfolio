import React, { useState, useCallback } from 'react';
import dbCertificate from '../../db/certificates.json';
import CertificatesListItem from './CertificatesListItem';
import AnimateElements from '../Utility/AnimateElements';
import FsLightbox from 'fslightbox-react';

const CertificatesList = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleLightbox = useCallback(
    index => {
      setCurrentImageIndex(index);
      setIsLightboxOpen(!isLightboxOpen);
    },
    [isLightboxOpen]
  );

  // Предположим, что dbCertificate является объектом с ключами, соответствующими ID сертификатов.
  const data = Object.keys(dbCertificate)
    .map(key => {
      const { id, thumbnail, fullImage, linkPDF } = dbCertificate[key].certificate;
      return {
        id,
        thumbnail,
        fullImage,
        linkPDF,
      };
    })
    .reverse();

  // Создаем массив URL для всех полноразмерных изображений сертификатов
  const images = data.map(item => process.env.PUBLIC_URL + item.fullImage);

  return (
    <AnimateElements>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 ">
        {data.map((item, index) => (
          <CertificatesListItem key={item.id} item={item} toggleLightbox={() => toggleLightbox(index)} />
        ))}
      </ul>
      <FsLightbox toggler={isLightboxOpen} sources={images} slide={currentImageIndex + 1} />
    </AnimateElements>
  );
};

export default CertificatesList;
