import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import configClient from '@/config/client';
import theme from '@/styles/theme';

export interface ISeoProps {
  title?: string;
  description?: string;
  image?: string;
  shouldIndexPage?: boolean;
  twitterSite?: string;
  twitterCreator?: string;
}

const SEO: React.FC<ISeoProps> = ({
  title,
  description = configClient.description,
  image,
  shouldIndexPage = true,
  twitterCreator = configClient.twitter.creator,
  twitterSite = configClient.twitter.site,
}) => {
  const { asPath } = useRouter();
  const pageUrl = `${configClient.url}${asPath}`;
  const pageTitle = `${title ? `${title} - ` : ''}${configClient.title}`;
  const pageImage = image ?? configClient.seoImage;

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />

      {theme.colors.primary && (
        <>
          <meta name="theme-color" content={theme.colors.primary} />
          <meta name="msapplication-TileColor" content={theme.colors.primary} />
        </>
      )}

      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />

      {pageImage && (
        <>
          <meta property="og:image" content={pageImage} />
          <meta property="og:image:secure_url" content={pageImage} />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}

      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />

      {pageImage && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={pageImage} />
          <meta name="twitter:image:src" content={pageImage} />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="620" />
        </>
      )}
    </Head>
  );
};

export default SEO;
