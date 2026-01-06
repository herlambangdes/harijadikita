import React, { useState } from "react";
import { useNavigate } from "react-router";
import KeluargaPriaForm from "../components/KeluargaPriaForm";
import styles from "/src/assets/styles/KeluargaPria.module.css";
import GoNextBack from "../components/GoNextBack";

export default function KeluargaPria({ firstPage }) {
  let navigate = useNavigate();

  const [keluargaPria, setKeluargaPria] = useState({
    namaAyah: "",
    namaIbu: "",
    posisiPriaDalamKeluarga: "",
    jumlahSaudaraPria: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setKeluargaPria((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/keluarga-wanita");
  };

  const handleBack = (e) => {
    navigate(-1);
  }

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
            Keluarga Pengantin <span className={styles.highlight}>Pria</span>
          </h1>
          <p className={styles.description}>
            Masukkan profil keluarga pengantin pria.
          </p>
          <KeluargaPriaForm value={keluargaPria} onChange={handleChange} />
          <GoNextBack firstPage={firstPage} onNext={handleNext} onBack={handleBack} currentStep={4} />
        </div>
      </div>
    </>
  );
}
