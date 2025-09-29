import React, { useState } from "react";
import { useNavigate } from "react-router";
import JadwalForm from "../components/JadwalForm";
import styles from '/src/assets/styles/Jadwal.module.css'
import GoNextBack from "../components/GoNextBack";

export default function Jadwal({firstPage, addResepsi}) {
    
    const handleBack = (e) => {
    navigate(-1);
  };

    return (
   <>
   <div className={styles.container}>
    <header className={styles.header}>
        <img className={styles.logo} src="https://ik.imagekit.io/harijadikita/logo/harijadikita%20logomark.svg?updatedAt=1759016597149"/>
        <a className={styles.skip} href="#">Lewati</a>
    </header>
    <div className={styles.form}>
        <h1 className={styles.title}> Tanggal dan Waktu Pernikahan</h1>
        <p className={styles.description}>Kamu bisa tambah lebih dari satu tanggal resepsi. Jika tidak ada resepsi, tidak perlu klik tombol 'Tambah resepsi'</p>
    <JadwalForm addResepsi={addResepsi}/>
    <GoNextBack firstPage={firstPage} onBack={handleBack}/>
    </div>
    </div>
    </>
    )
}