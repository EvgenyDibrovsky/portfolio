import React from 'react';
import dbCertificate from '../../db/certificates.json';
import CertificatesListItem from './CertificatesListItem';
import AnimateElements from '../Utility/AnimateElements';

export default function CertificatesList() {
  const data = dbCertificate
    .map(item => {
      return {
        id: item.certificate.id,
        thumbnail: item.certificate.thumbnail,
        fullImage: item.certificate.fullImage,
        linkPDF: item.certificate.linkPDF,
      };
    })
    .reverse();

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
