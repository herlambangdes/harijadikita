import React from "react";
import styles from "/src/assets/styles/NamaPengantinForm.module.css";

//add props
export default function NamaPengantinForm({ value, onChange }) {
  return (
    <>
      <form>
        <input
          type="text"
          name="namaLengkap"
          placeholder="Nama lengkap dan gelar (jika ada)"
          className={styles.input}
          value={value.namaLengkap}
          onChange={onChange}
        />

        <input
          type="text"
          name="namaPanggilan"
          placeholder="Nama panggilan"
          className={`${styles.input} ${styles.panggilan}`}
          value={value.namaPanggilan}
          onChange={onChange}
        />
      </form>
    </>
  );
}
