/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const IconEdit = ({ className, ...restProps }) => {
  return (
    <svg
      width="23px"
      height="23px"
      viewBox="0 0 23 23"
      fill="currentColor"
      className={clsx(styles.iconEdit, className)}
      aria-hidden="true"
      {...restProps}
    >
      <path d="M0.5,23c-0.1,0-0.3-0.1-0.4-0.1C0,22.7,0,22.5,0,22.4l1.4-4.7c0-0.1,0.1-0.2,0.1-0.2L18.4,0.5c0.6-0.6,1.6-0.6,2.2,0l1.9,1.9c0.6,0.6,0.6,1.6,0,2.2l-3.2,3.2c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l3.2-3.2C22,3.6,22,3.3,21.8,3L20,1.2c-0.2-0.2-0.6-0.2-0.8,0L2.3,18l-1.1,3.7L5,20.7l9.1-9.1c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-9.2,9.2c-0.1,0.1-0.1,0.1-0.2,0.1L0.6,23C0.6,23,0.5,23,0.5,23z" />
    </svg>
  );
};

export default IconEdit;
