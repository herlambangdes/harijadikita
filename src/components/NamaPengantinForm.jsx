import React from "react";
import styles from "/src/assets/styles/NamaPengantinForm.module.css";

//add props
export default function NamaPengantinForm({ value, onChange }) {
  return (
    <>
      <form>
        <input
          type="text"
          name="nama-lengkap-pengantin"
          placeholder="Nama lengkap dan gelar (jika ada)"
          className={styles.input}
          value={value.namaLengkap}
          onChange={(e) => onChange({ ...value, namaLengkap: e.target.value })}
        />

        <input
          type="text"
          name="nama-panggilan-pengantin"
          placeholder="Nama panggilan"
          className={`${styles.input} ${styles.panggilan}`}
          value={value.namaPanggilan}
          onChange={(e) => onChange({ ...value, namaPanggilan: e.target.value })}
        />
      </form>
    </>
  );
}
