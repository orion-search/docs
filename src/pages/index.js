import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Measure progress in science</>,
    imageUrl: 'img/Asset_1.svg',
    description: (
      <>
        Orion creates indicators showing dimensions of scientific progress.
      </>
    ),
  },
  {
    title: <>ML-powered search</>,
    imageUrl: 'img/Asset_2.svg',
    description: (
      <>
        Orion’s semantic search engine enables queries with anything from a
        keyword or phrase to entire paragraphs of text.
      </>
    ),
  },
  {
    title: <>It is flexible</>,
    imageUrl: 'img/Asset_3.svg',
    description: (
      <>
        Orion indexes bioRxiv papers but it can be deployed for any field of
        study, journal or conference.
      </>
    ),
  },
  {
    title: <>Information-rich, domain-specific explorations</>,
    imageUrl: 'img/Asset_4.svg',
    description: (
      <>
        Orion combines data from a variety of sources and was designed for
        visual exploration and discovery.
      </>
    ),
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title="Documentation"
      description="Knowledge discovery and research measurement">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
