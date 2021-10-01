import React, { useEffect } from 'react';

import { NextPage } from 'next';
import Router from 'next/router';

import NProgress from 'nprogress';

import SEO, { ISeoProps } from './SEO';

const Layout: NextPage<ISeoProps> = ({ children, ...rest }) => {
  useEffect(() => {
    Router.events.on(`routeChangeStart`, () => NProgress.start());
    Router.events.on(`routeChangeComplete`, () => NProgress.done());
    Router.events.on(`routeChangeError`, () => NProgress.done());
  }, []);

  return (
    <>
      <SEO {...rest} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
