import React from 'react'; // removed useState since it's not being used
import dbCertificate from '../../db/certificates.json';
import { useTranslation } from 'react-i18next';

export default function Certificates() {
  const { i18n } = useTranslation(); // removed 't' since it's not being used
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
    <ul>
      {data.map(cert => (
        <li key={cert.id}>
          <a href={cert.linkCertificate} target="_blank" rel="noopener noreferrer">
            <img src={cert.thumbnail} alt={cert['name-certificate']} />
            <h3>{cert['name-certificate']}</h3>
            <p>{cert.description}</p>
            <p>{cert['name-school']}</p>
            <p>
              {cert.startDate} - {cert.finishtDate}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
