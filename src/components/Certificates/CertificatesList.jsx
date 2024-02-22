import React from 'react';
import dbCertificate from '../../db/certificates.json';
import CertificatesListItem from './CertificatesListItem';
import useCurrentLanguage from '../Hooks/useCurrentLanguage';
import AnimateElements from '../Utility/AnimateElements';

export default function CertificatesList() {
  const currentLanguage = useCurrentLanguage();

  const data = dbCertificate.map(item => {
    const languageSpecificData = item.certificate[currentLanguage];

    return {
      ...languageSpecificData,
      id: item.certificate.id,
      thumbnail: item.certificate.thumbnail,
      fullImage: item.certificate.fullImage,
      startDate: item.certificate.startDate,
      finishtDate: item.certificate.finishtDate,
      linkPDF: item.certificate.linkPDF,
    };
  });

  return (
    <AnimateElements>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 ">
        {data.map(item => (
          <CertificatesListItem key={item.id} item={item} />
        ))}
      </ul>
    </AnimateElements>
  );
}
