'use client';

import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const DocSearchComponent = () => {
  return (
    <DocSearch
      appId="QJYMR8V9ES"
      indexName="networkcanvas"
      apiKey="4e09bb1a4232929e2475f2809e256eb7"
      insights={true}
    />
  );
};

export default DocSearchComponent;
