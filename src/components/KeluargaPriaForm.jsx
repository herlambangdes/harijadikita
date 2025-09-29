import React from "react";
import styles from "/src/assets/styles/KeluargaPriaForm.module.css";

//add props
export default function KeluargaPriaForm({ value, onChange }) {
  return (
    <>
      <form>
        <input
          type="text"
          name="nama-ayah"
          placeholder="Nama ayah/wali"
          className={styles.input}
          value={value.namaAyah}
          onChange={(e) => onChange({...value, namaAyah: e.target.value})}
        />

        <input
          type="text"
          name="nama-ibu"
          placeholder="Nama ibu/wali"
          className={styles.input}
          value={value.namaIbu}
          onChange={(e) => onChange({...value, namaIbu: e.target.value})}
        />
         <input
          type="text"
          name="posisi-pria-dalam-keluarga"
          placeholder="Pengantin pria anak ke berapa"
          className={styles.input}
          value={value.posisiPriaDalamKeluarga}
          onChange={(e) => onChange({...value, posisiPriaDalamKeluarga: e.target.value})}
        />
        <p className={styles.noteOne}>Contoh: pertama</p>
         <input
          type="text"
          name="jumlah-saudara-pria"
          placeholder="Jumlah saudara pengantin pria"
          className={styles.input}
          value={value.jumlahSaudaraPria}
          onChange={(e) => onChange({...value, jumlahSaudaraPria: e.target.value})}
        />
        <p className={styles.noteTwo}>Contoh: dua</p>
      </form>
    </>
  );
}
