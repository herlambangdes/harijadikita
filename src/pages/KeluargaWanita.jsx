import React, { useState } from "react";
import { useNavigate } from "react-router";
import KeluargaWanitaForm from "../components/KeluargaWanitaForm";
import styles from "/src/assets/styles/KeluargaWanita.module.css";
import GoNextBack from "../components/GoNextBack";

export default function KeluargaWanita({ firstPage }) {
  let navigate = useNavigate();

  const [keluargaWanita, setKeluargaWanita] = useState({
    namaAyah: "",
    namaIbu: "",
    posisiWanitaDalamKeluarga: "",
    jumlahSaudaraWanita: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setKeluargaWanita((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/jadwal");
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
          <h1 className={styles.title}>
            Keluarga Pengantin <span className={styles.highlight}>Wanita</span>
          </h1>
          <p className={styles.description}>
            Masukkan profil keluarga pengantin wanita.
          </p>
          <KeluargaWanitaForm
            value={keluargaWanita}
            onChange={handleChange}
          />
          <GoNextBack firstPage={firstPage} onNext={handleNext} onBack={handleBack} currentStep={5} />
        </div>
      </div>
    </>
  );
}
