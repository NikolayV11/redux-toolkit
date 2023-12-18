import React from "react";
import styles from "./Home.module.scss";
import { Header } from "../Components/Header";
import { Input } from "../Components/input";
import { Added } from "../Components/added/Added";

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_header}>
        <Header />
      </div>

      <div className={styles.home_column}>
        <div className={styles.home_column__left}>
          <Input />
          <div className={styles.home_column__left_tasks}>
            <Added />
          </div>
        </div>
        <div className={styles.home_column__right}></div>
      </div>
    </div>
  );
}
