import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { TypeAnimation } from 'react-type-animation';

import KimChan from '@site/static/img/kctrnn.JPG';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTitleWrapper}>
          <img className={styles.heroTitleThumbnail} src={KimChan} alt="kctrnn thumbnail" />

          <TypeAnimation
            className="hero__title"
            wrapper="h1"
            sequence={['Hi, I am Kim Chan', 1000, 'Hi, I am kctrnn', 1000]}
            repeat={Infinity}
          />
        </div>

        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog/welcome">
            Let's gooooo 🤟
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title="Homepage"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
