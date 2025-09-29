import React, { useState } from "react";
import { useNavigate } from "react-router";
import NamaPengantinForm from "../components/NamaPengantinForm";
import styles from "/src/assets/styles/NamaPria.module.css";
import GoNextBack from "../components/GoNextBack";

export default function NamaPria({ firstPage }) {
  let navigate = useNavigate();

  const [namaPria, setNamaPria] = useState({
    namaLengkap: "",
    namaPanggilan: "",
  });

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/nama-wanita");
  };

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
          <h1 className={styles.title}>
            Nama Pengantin <span className={styles.highlight}>Pria</span>
          </h1>
          <p className={styles.description}>
            Masukkan nama lengkap dan gelar (jika ada) kamu
          </p>
          <NamaPengantinForm value={namaPria} onChange={setNamaPria} />
          <GoNextBack firstPage={firstPage} onNext={handleNext} />
        </div>
      </div>
    </>
  );
}
