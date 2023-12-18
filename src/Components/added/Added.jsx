import React from "react";

import styles from "./Added.module.scss";

export function Added() {
  return (
    <div className={styles.added}>
      <div className={styles.added__title}>
        <p>текст</p>
      </div>
      <div className={styles.added__block}>
        <button className={`${styles.block_button} button`}>Выполнено</button>
        <button className={`${styles.block_button} button`}>Удалить</button>
      </div>
    </div>
  );
}
