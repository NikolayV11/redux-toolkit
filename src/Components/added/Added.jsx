import React from "react";

import styles from "./Added.module.scss";

export function Added({ data, deleIsList }) {
  // console.log(data, "added");
  const [status, setStatus] = React.useState(false);
  return (
    <div className={styles.added}>
      <div className={`${styles.added__title} ${status ? styles.added__title_active : ""}`}>
        <p className={`${status ? styles.title_p_active : ""}`}>{data.title}</p>
      </div>
      <div className={styles.added__block}>
        <button
          onClick={() => {
            setStatus(!status);
            data.status = !data.status;
          }}
          className={`${styles.block_button} button ${status ? styles.button_active : ""}`}>
          Выполнено
        </button>
        <button
          onClick={() => {
            deleIsList(data.id);
          }}
          className={`button ${styles.block_button} ${styles.block_button_delete}`}>
          Удалить
        </button>
      </div>
    </div>
  );
}
