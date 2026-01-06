import React, { useState } from "react";
import { useNavigate } from "react-router";
import RekeningForm from "../components/RekeningForm";
import styles from "/src/assets/styles/Rekening.module.css";
import GoNextBack from "../components/GoNextBack";

//Fix state and props
export default function Rekening({ firstPage, addRekening }) {
  let navigate = useNavigate();

  const [rekeningAdded, setRekeningAdded] = useState({
    pemilikRekening: "",
    nomorRekening: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRekeningAdded((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    navigate("/jumlah-tamu");
  };

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
          <h1 className={styles.title}> Tambah Rekening</h1>
          <p className={styles.description}>
            Masukkan rekening kamu untuk menerima hadiah uang cashless dari tamu
            yang kamu undang.
          </p>
          <RekeningForm
            value={rekeningAdded}
            onChange={handleChange}
            addRekening={addRekening}
          />
          <GoNextBack
            firstPage={firstPage}
            onNext={handleNext}
            onBack={handleBack}
            currentStep={8}
          />
        </div>
      </div>
    </>
  );
}
