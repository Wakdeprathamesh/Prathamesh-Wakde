import React from 'react';
import { Helmet } from 'react-helmet';
import JsonLd from './JsonLd';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: {
    type: 'Person' | 'WebSite' | 'WebPage' | 'Article' | 'BreadcrumbList' | 'Project';
    data: Record<string, any>;
  };
}

const SEO: React.FC<SEOProps> = ({
  title = 'Prathamesh Wakde | Full Stack AI Developer',
  description = 'Full Stack AI Developer specializing in creating dynamic, intelligent web experiences with precision, innovation, and a dedicated team.',
  keywords = 'Prathamesh Wakde, Full Stack Developer, AI Developer, React, Node.js, MongoDB, Web Development, AI Integration, MERN Stack, Portfolio',
  image = 'https://prathameshwakde.com/og-image.jpg',
  url = 'https://prathameshwakde.com',
  type = 'website',
  structuredData,
}) => {
  const siteTitle = 'Prathamesh Wakde | Portfolio';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="title" content={fullTitle} />
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />
      </Helmet>

      {/* Structured Data */}
      {structuredData && <JsonLd type={structuredData.type} data={structuredData.data} />}
    </>
  );
};

export default SEO; 