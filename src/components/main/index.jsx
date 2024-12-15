import React from 'react';
import styles from './index.module.css';

export default function Main({ children }) {

  return (
    <main className={styles.container}>
      <div className={styles.children}>{children}</div>
    </main>
  );
}
