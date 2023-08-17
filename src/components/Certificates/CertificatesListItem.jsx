import React from 'react';

export default function CertificatesListItem({ item }) {
  return (
    <li>
      <a href={item.linkCertificate} target="_blank" rel="noopener noreferrer">
        <img
          src={process.env.PUBLIC_URL + item.thumbnail}
          alt={item['name-certificate']}
          className="mx-auto w-full"
          loading="lazy"
        />
        <h3>{item['name-certificate']}</h3>
        <p>{item.description}</p>
        <p>{item['name-school']}</p>
        <p>
          {item.startDate} - {item.finishtDate}
        </p>
      </a>
    </li>
  );
}
