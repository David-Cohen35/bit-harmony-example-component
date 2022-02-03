import React from 'react';
import styles from './loading.module.scss';

export type LoadingProps = {
  dataTest?: string;
  size?: 'xs' | 's' | 'm';
};

export type LoadingDefaultProps = {
  size?: 'm';
};

export function Loading({ dataTest, size }: LoadingProps) {
  return <div data-test={dataTest} className={styles[`loading--${size}`]} />;
}

export default Loading;
