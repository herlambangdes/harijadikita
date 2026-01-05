import React from "react";
import styles from "/src/assets/styles/KeluargaPriaForm.module.css";

//add props
export default function KeluargaPriaForm({ value, onChange }) {
  return (
    <>
      <form>
        <input
          type="text"
          name="namaAyah"
          placeholder="Nama ayah/wali"
          className={styles.input}
          value={value.namaAyah}
          onChange={onChange}
        />

        <input
          type="text"
          name="namaIbu"
          placeholder="Nama ibu/wali"
          className={styles.input}
          value={value.namaIbu}
          onChange={onChange}
        />
         <input
          type="text"
          name="posisiPriaDalamKeluarga"
          placeholder="Pengantin pria anak ke berapa"
          className={styles.input}
          value={value.posisiPriaDalamKeluarga}
          onChange={onChange}
        />
        <p className={styles.noteOne}>Contoh: pertama</p>
         <input
          type="text"
          name="jumlahSaudaraPria"
          placeholder="Jumlah saudara pengantin pria"
          className={styles.input}
          value={value.jumlahSaudaraPria}
          onChange={onChange}
        />
        <p className={styles.noteTwo}>Contoh: dua</p>
      </form>
    </>
  );
}
