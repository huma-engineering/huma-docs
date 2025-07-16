import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';
import {findFirstCategoryLink} from "@docusaurus/theme-common/internal";

function CardContainer({ href, children }) {
  const className = clsx(
    'card',
    styles.cardContainer,
    href && styles.cardContainerLink,
  );
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}


function CardLayout({ href, label, title, description, learnMore }) {
  return (
    <CardContainer href={href}>
      <div className={styles.cardImg} style={{ backgroundImage: `url(/img/circle.svg)` }}><div dangerouslySetInnerHTML={{ __html: label }}></div></div>
      <div className={`${styles.cardInner}`}>
        <div>
          <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
            {title}
          </h2>
          <div
            className={styles.cardDescription}
            title={description}>
            {description}
          </div>
        </div>
        {(learnMore && href) && <Link className={`${styles.cardLearnMore}`}>{translate(
          {
            message: 'Read more',
            id: 'theme.docs.Card.readMore',
          })}
        </Link>
        }
      </div>
    </CardContainer>
  );
}

function CardCategory({ item }) {
  const href = findFirstCategoryLink(item);
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={translate(
        {
          message: '{count} items',
          id: 'theme.docs.DocCard.categoryDescription',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count: item.items.length },
      )}
    />
  );
}

function CardLink({ item, learnMore }) {
  return (
    <CardLayout
      href={item.href}
      img={item.img}
      title={item.label}
      label={item.label2}
      description={item?.description}
      learnMore={learnMore}
    />
  );
}

export default function DocCard({ item, learnMore }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} learnMore={learnMore} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
