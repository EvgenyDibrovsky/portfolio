import React from 'react';
import ModalImage from 'react-modal-image';
import {
  BsFiletypePdf,
  BsBuildings,
  BsCalendar3,
  BsReverseListColumnsReverse,
} from 'react-icons/bs';

export default function CertificatesListItem({ item }) {
  return (
    <li>
      <h3>{item['name-certificate']}</h3>
      <ModalImage
        small={process.env.PUBLIC_URL + item.thumbnail}
        large={process.env.PUBLIC_URL + item.fullImage}
        alt={item['name-certificate']}
        className="w-full"
      />
      <div className=" flex items-center gap-4">
        <BsReverseListColumnsReverse />
        <p>{item.description}</p>
      </div>
      <div className=" flex items-center gap-4">
        <BsBuildings />
        <p>{item['name-school']}</p>
      </div>
      <div className=" flex items-center gap-4">
        <BsCalendar3 />
        {item.startDate} - {item.finishtDate}
      </div>
      <div className=" flex items-center gap-4">
        <BsFiletypePdf />
        <a href={process.env.PUBLIC_URL + item.linkPDF} target="_blank" rel="noopener noreferrer">
          Открыть PDF
        </a>
      </div>
    </li>
  );
}
