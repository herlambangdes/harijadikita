import React from "react";
import styles from "/src/assets/styles/RekeningForm.module.css";

//Fix state and props, add handle add rekening, and integrate with bank list api
export default function RekeningForm({ value, onChange, addRekening }) {
  return (
    <>
      <form>
        {addRekening && <h2 className={styles.title}>Pemilik rekening ke-1</h2>}
        <input
          type="text"
          name="pemilikRekening"
          value={value.pemilikRekening}
          placeholder="Nama pemilik rekening"
          className={styles.input}
          onChange={onChange}
        />

        {/* tambahkan list bank di Indonesia */}
        <input
          type="text"
          name="nomorRekening"
          value={value.nomorRekening}
          placeholder="Masukkan no. rekening"
          className={styles.input}
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={onChange}
        />
        {addRekening && <h2 className={styles.title}>Pemilik rekening ke-2</h2>}
        {addRekening && (
          <input
            type="text"
            name="pemilikRekening"
            value={value.pemilikRekening}
            placeholder="Nama pemilik rekening"
            className={styles.input}
            onChange={onChange}
          />
        )}
        {/* tambahkan list bank di Indonesia */}
        {addRekening && (
          <input
            type="text"
            name="nomorRekening"
            value={value.nomorRekening}
            placeholder="Masukkan no. rekening"
            className={styles.input}
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={onChange}
          />
        )}
        <button type="button" className={styles.tambahRekening}>
          Tambah rekening
        </button>
      </form>
    </>
  );
}
