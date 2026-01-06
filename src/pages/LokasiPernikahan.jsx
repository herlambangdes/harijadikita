import React, { useState } from "react";
import { useNavigate } from "react-router";
import LokasiPernikahanForm from "../components/LokasiPernikahanForm";
import styles from "/src/assets/styles/LokasiPernikahan.module.css";
import GoNextBack from "../components/GoNextBack";

//fix state
export default function LokasiPernikahan({ firstPage, addResepsi }) {
  let navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/rekening");
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
          <h1 className={styles.title}> Lokasi Pernikahan</h1>
          <p className={styles.descriptionOne}>
            Masukkan lokasi akad dan resepsi pernikahan kamu.
          </p>
          <p className={styles.descriptionTwo}>
            *Lokasi terhubung dengan Google Maps, jika lokasi tidak ditemukan,
            kamu bisa masukkan lintang dan bujur:{" "}
            <a className={styles.tutorial} href="#">
              lihat caranya
            </a>
          </p>
          <LokasiPernikahanForm addResepsi={addResepsi} />
          <GoNextBack
            firstPage={firstPage}
            onNext={handleNext}
            onBack={handleBack}
            currentStep={7}
          />
        </div>
      </div>
    </>
  );
}
