'use client';

import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const DocSearchComponent = () => {
  return (
    <DocSearch
      appId="QJYMR8V9ES"
      indexName="networkcanvas"
      apiKey="91c1f75606963a5bc5f682af4b9c25e1"
      insights={true}
    />
  );
};

export default DocSearchComponent;
