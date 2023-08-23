import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ metaTitle, metaDescription }) => (
  <Helmet>
    <title>{metaTitle}</title>
    <meta name="description" content={metaDescription} />
  </Helmet>
);

export default MetaTags;
