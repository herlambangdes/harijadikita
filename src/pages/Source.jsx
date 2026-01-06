import React, { useState } from "react";
import { useNavigate } from "react-router";
import SourceForm from "../components/SourceForm";
import styles from "/src/assets/styles/JumlahTamu.module.css";
import GoNextBack from "../components/GoNextBack";

//Fix state
export default function Source({ firstPage }) {
  let navigate = useNavigate();

  const [source, setSource] = useState("");

  const handleChange = ({ target }) => {
    setSource(target.value);
  }

  const handleBack = (e) => {
    navigate(-1);
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
          <h1 className={styles.title}>Tahu harijadikita dari mana?</h1>
          <SourceForm value={source} onChange={handleChange} />
          <GoNextBack firstPage={firstPage} onBack={handleBack} currentStep={10} />
        </div>
      </div>
    </>
  );
}
