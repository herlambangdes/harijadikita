import React from "react";
import styles from "/src/assets/styles/KeluargaWanitaForm.module.css";

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
          name="posisi-wanita-dalam-keluarga"
          placeholder="Pengantin wanita anak ke berapa"
          className={styles.input}
          value={value.posisiWanitaDalamKeluarga}
          onChange={(e) => onChange({...value, posisiWanitaDalamKeluarga: e.target.value})}
        />
        <p className={styles.noteOne}>Contoh: pertama</p>
         <input
          type="text"
          name="jumlah-saudara-wanita"
          placeholder="Jumlah saudara pengantin wanita"
          className={styles.input}
          value={value.jumlahSaudaraWanita}
          onChange={(e) => onChange({...value, jumlahSaudaraWanita: e.target.value})}
        />
        <p className={styles.noteTwo}>Contoh: dua</p>
      </form>
    </>
  );
}
