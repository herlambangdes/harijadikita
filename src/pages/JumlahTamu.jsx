import React from "react";
import JumlahTamuForm from "../components/JumlahTamuForm";
import styles from '/src/assets/styles/JumlahTamu.module.css'
import GoNextBack from "../components/GoNextBack";

export default function JumlahTamu({firstPage}) {
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
        <h1 className={styles.title}>Jumlah Tamu</h1>
        <p className={styles.description}>Masukkan estimasi jumlah tamu yang akan diundang.  </p>
    <JumlahTamuForm />
    <GoNextBack firstPage={firstPage} onBack={handleBack}/>
    </div>
    </div>
    </>
    )
}