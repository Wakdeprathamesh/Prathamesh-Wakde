import React from 'react';
import { Helmet } from 'react-helmet';

interface JsonLdProps {
  type: 'Person' | 'WebSite' | 'WebPage' | 'Article' | 'BreadcrumbList' | 'Project';
  data: Record<string, any>;
}

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return JSON.stringify(baseData);
  };

  return (
    <Helmet>
      <script type="application/ld+json">{getStructuredData()}</script>
    </Helmet>
  );
};

export default JsonLd; 