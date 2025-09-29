import React from "react";
import RekeningForm from "../components/RekeningForm";
import styles from "/src/assets/styles/Rekening.module.css";
import GoNextBack from "../components/GoNextBack";

export default function Rekening({ firstPage, addRekening }) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            className={styles.logo}
            src="https://ik.imagekit.io/harijadikita/logo/harijadikita%20logomark.svg?updatedAt=1759016597149"
          />
          <a className={styles.skip} href="#">
            Lewati
          </a>
        </header>
        <div className={styles.form}>
          <h1 className={styles.title}> Tambah Rekening</h1>
          <p className={styles.description}>
            Masukkan rekening kamu untuk menerima hadiah uang cashless dari tamu
            yang kamu undang.
          </p>
          <RekeningForm addRekening={addRekening} />
          <GoNextBack firstPage={firstPage} />
        </div>
      </div>
    </>
  );
}
