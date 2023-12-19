import React from "react";

import styles from "./Delet.module.scss";

export function Delet({ data }) {
  return (
    <div className={styles.block}>
      <p>{data.title}</p>
    </div>
  );
}
