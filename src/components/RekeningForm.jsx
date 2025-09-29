import React from "react";
import styles from "/src/assets/styles/RekeningForm.module.css";

//Fix state and props and add handle add rekening
export default function RekeningForm({ addRekening }) {
  return (
    <>
      <form>
        {addRekening && <h2 className={styles.title}>Pemilik rekening ke-1</h2>}
        <input
          type="text"
          name="pemilik-rekening"
          placeholder="Nama pemilik rekening"
          className={styles.input}
        />
        
{/* tambahkan list bank di Indonesia */}
        <input
          type="text"
          name="nomor-rekening"
          placeholder="Masukkan no. rekening"
          className={styles.input}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        {addRekening && <h2 className={styles.title}>Pemilik rekening ke-2</h2>}
        {addRekening && (
          <input
            type="text"
            name="pemilik-rekening"
            placeholder="Nama pemilik rekening"
            className={styles.input}
          />
        )}
        {/* tambahkan list bank di Indonesia */}
        {addRekening && (
          <input
            type="text"
            name="nomor-rekening"
            placeholder="Masukkan no. rekening"
            className={styles.input}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        )}
        <button type="button" className={styles.tambahRekening}>
          Tambah rekening
        </button>
      </form>
    </>
  );
}
