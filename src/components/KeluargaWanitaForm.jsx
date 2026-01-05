import React from "react";
import styles from "/src/assets/styles/KeluargaWanitaForm.module.css";

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
          name="posisiWanitaDalamKeluarga"
          placeholder="Pengantin wanita anak ke berapa"
          className={styles.input}
          value={value.posisiWanitaDalamKeluarga}
          onChange={onChange}
        />
        <p className={styles.noteOne}>Contoh: pertama</p>
        <input
          type="text"
          name="jumlahSaudaraWanita"
          placeholder="Jumlah saudara pengantin wanita"
          className={styles.input}
          value={value.jumlahSaudaraWanita}
          onChange={onChange}
        />
        <p className={styles.noteTwo}>Contoh: dua</p>
      </form>
    </>
  );
}
