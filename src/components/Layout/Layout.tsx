import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Header } from '../Header';

import styles from './layout.module.css';
import { Header as LayoutHeader } from './components/header';

interface PageProps {
  title?: string;
  className?: string;
  scrollToTop?: boolean;
  goback?: boolean;
  children: React.ReactNode;
}

const Layout = ({ title, className, scrollToTop, goback, children }: PageProps) => {
  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [scrollToTop]);

  return (
    <>
      <Header />
      <div className={classNames(styles.page, className)}>
        <HelmetProvider>
          <Helmet>
            <title itemProp="name" lang="en">{`${title} | insurely`}</title>
          </Helmet>
        </HelmetProvider>
        {goback && <LayoutHeader goback />}
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
