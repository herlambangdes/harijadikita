import React, { useState } from "react";
import { useNavigate } from "react-router";
import InstagramForm from "../components/InstagramForm";
import styles from "/src/assets/styles/Instagram.module.css";
import GoNextBack from "../components/GoNextBack";

export default function Instagram({ firstPage }) {
  let navigate = useNavigate();

  const [instagram, setInstagram] = useState({
    instagramPria: "",
    instagramWanita: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInstagram((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/keluarga-pria");
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
          <h1 className={styles.title}>Username Instagram</h1>
          <p className={styles.description}>
            Masukkan username instagram pengantin untuk ditampilkan di undangan,
            kosongkan jika pengantin tidak memiliki akun instagram.
          </p>
          <InstagramForm value={instagram} onChange={handleChange} />
          <GoNextBack
            firstPage={firstPage}
            onNext={handleNext}
            onBack={handleBack}
            currentStep={3}
          />
        </div>
      </div>
    </>
  );
}
