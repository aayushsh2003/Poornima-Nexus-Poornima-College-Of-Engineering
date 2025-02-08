import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Poornima Nexus - Open Source Projects at Poornima College',
  description = 'Discover and contribute to innovative open-source projects from Poornima College\'s talented developers. Join our community and make an impact.',
  image = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  url = 'https://poornimanexus.org',
  type = 'website'
}: SEOProps) {
  const siteTitle = 'Poornima Nexus';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0284c7" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="keywords" content="Poornima College, open source, projects, student developers, React, web development, engineering" />
      <meta name="author" content="Aayush Sharma" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Poornima Nexus",
          "url": "https://poornimanexus.org",
          "logo": "https://poornima-nexus-poornima-college-of-engineering.vercel.app/logo.png",
          "sameAs": [
            "https://github.com/aayushsh2003",
            "https://linkedin.com/company/poornima-nexus",
            "https://twitter.com/poornima_nexus"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXX-XXX-XXXX",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
}