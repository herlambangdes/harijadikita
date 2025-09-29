import React from "react";
import styles from "/src/assets/styles/KeluargaPriaForm.module.css";

//add props
export default function KeluargaPriaForm() {
  return (
    <>
      <form>
        <input
          type="text"
          name="nama-ayah"
          placeholder="Nama ayah/wali"
          className={styles.input}
        />

        <input
          type="text"
          name="nama-ibu"
          placeholder="Nama ibu/wali"
          className={styles.input}
        />
         <input
          type="text"
          name="posisi-pria-dalam-keluarga"
          placeholder="Pengantin pria anak ke berapa"
          className={styles.input}
        />
        <p className={styles.noteOne}>Contoh: pertama</p>
         <input
          type="text"
          name="jumlah-saudara-pria"
          placeholder="Jumlah saudara pengantin pria"
          className={styles.input}
        />
        <p className={styles.noteTwo}>Contoh: dua</p>
      </form>
    </>
  );
}
