/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ThemeClassNames,
  useThemeConfig
} from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import DocSidebarItems from '@theme/DocSidebarItems';
import type { Props } from '@theme/DocSidebar/Desktop/Content';
import {useLocalPathname} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';

import styles from './styles.module.css';
import stylesSidebar from '../styles.module.css';

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);

  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}

export default function DocSidebarDesktopContent({
  path,
  sidebar,
  className,
}: Props): JSX.Element {
  const showAnnouncementBar = useShowAnnouncementBar();
  const {
    navbar: { items },
  } = useThemeConfig();

  const localPathname = useLocalPathname();

  return (
    <>
      {items.map((item, i) => (
        item.type == "docsVersionDropdown" && (localPathname.includes(`/${item.docsPluginId}`) && <div className={stylesSidebar.sidebarVersion}><NavbarItem {...item} key={i} /></div>)
      ))}
      <nav
        className={clsx(
          'menu thin-scrollbar',
          styles.menu,
          showAnnouncementBar && styles.menuWithAnnouncementBar,
          className,
        )}>
        <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
          <DocSidebarItems items={sidebar} activePath={path} level={1} />
        </ul>
      </nav>
    </>

  );
}
