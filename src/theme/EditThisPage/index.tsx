/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import IconEdit from '@theme/Icon/Edit';
import type {Props} from '@theme/EditThisPage';
import styles from './styles.module.css';

export default function EditThisPage({editUrl}: Props): JSX.Element {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={`${ThemeClassNames.common.editThisPage} ${styles.editLabel}`}>
      <IconEdit />
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page">
        Edit this page
      </Translate>
    </a>
  );
}
