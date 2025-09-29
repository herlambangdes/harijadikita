import React, { useState } from "react";
import styles from "/src/assets/styles/GoNextBack.module.css";

//add props
export default function GoNextBack({ firstPage, onNext }) {
  return (
    <div className={styles.container}>
      <button className={styles.nextButton} onClick={onNext}>Berikutnya</button>
      {!firstPage && <button className={styles.backButton}>Sebelumnya</button>}
    </div>
  );
}
