import React from 'react';
import dbCertificate from '../../db/certificates.json';
import { useTranslation } from 'react-i18next';
import CertificatesListItem from './CertificatesListItem';

export default function CertificatesList() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  const data = dbCertificate.map(item => {
    const languageSpecificData = item.certificate[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.certificate.id,
      thumbnail: item.certificate.thumbnail,
      linkCertificate: item.certificate.linkCertificate,
      startDate: item.certificate.startDate,
      finishtDate: item.certificate.finishtDate,
    };
  });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
      {data.map(item => (
        <CertificatesListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
