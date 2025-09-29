import React from "react";
import KeluargaPriaForm from "../components/KeluargaPriaForm";
import styles from '/src/assets/styles/KeluargaPria.module.css'
import GoNextBack from "../components/GoNextBack";

export default function KeluargaPria({firstPage}) {
    return (
   <>
   <div className={styles.container}>
    <header className={styles.header}>
        <img className={styles.logo} src="https://ik.imagekit.io/harijadikita/logo/harijadikita%20logomark.svg?updatedAt=1759016597149"/>
        <a className={styles.skip} href="#">Lewati</a>
    </header>
    <div className={styles.form}>
        <h1 className={styles.title}>Keluarga Pengantin <span className={styles.highlight}>Pria</span></h1>
        <p className={styles.description}>Masukkan profil keluarga pengantin pria.</p>
    <KeluargaPriaForm />
    <GoNextBack firstPage={firstPage}/>
    </div>
    </div>
    </>
    )
}