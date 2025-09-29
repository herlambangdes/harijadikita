import React from "react";
import styles from "/src/assets/styles/KeluargaWanitaForm.module.css";

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
          name="posisi-wanita-dalam-keluarga"
          placeholder="Pengantin wanita anak ke berapa"
          className={styles.input}
        />
        <p className={styles.noteOne}>Contoh: pertama</p>
         <input
          type="text"
          name="jumlah-saudara-wanita"
          placeholder="Jumlah saudara pengantin wanita"
          className={styles.input}
        />
        <p className={styles.noteTwo}>Contoh: dua</p>
      </form>
    </>
  );
}
