import React from 'react';
import ModalImage from 'react-modal-image';

export default function CertificatesListItem({ item }) {
  return (
    <li>
      <ModalImage
        small={process.env.PUBLIC_URL + item.thumbnail}
        large={process.env.PUBLIC_URL + item.fullOmage}
        alt="Описание изображения"
      />
      <h3>{item['name-certificate']}</h3>
      <p>{item.description}</p>
      <p>{item['name-school']}</p>
      <p>
        {item.startDate} - {item.finishtDate}
      </p>
    </li>
  );
}
