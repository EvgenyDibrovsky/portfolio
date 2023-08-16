import React, { useState } from 'react';
import dbCertificate from '../../db/certificates.json';
import { useTranslation } from 'react-i18next';

export default function Certificates() {
  const { t, i18n } = useTranslation();
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
}
