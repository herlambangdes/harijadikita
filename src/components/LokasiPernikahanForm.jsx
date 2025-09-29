import React from "react";
import styles from "/src/assets/styles/LokasiPernikahanForm.module.css";

//add props
export default function LokasiPernikahanForm({addResepsi}) {
  return (
    <>
      <form>
         {addResepsi && <h2 className={styles.title}>Akad</h2>}
        <input
          type="text"
          name="lokasi-akad"
          placeholder="Cari lokasi akad"
          className={styles.input}
        />
         {addResepsi && <h2 className={styles.title}>Resepsi</h2>}

        <input
          type="text"
          name="lokasi-resepsi"
          placeholder={addResepsi ? "Cari lokasi resepsi ke-1" : "Cari lokasi resepsi"}
          className={styles.input}
        />
        {addResepsi && (
          <input
          type="text"
          name="lokasi-resepsi"
          placeholder="Cari lokasi resepsi ke-2"
          className={styles.input}
        />
        )}
      </form>
    </>
  );
}
