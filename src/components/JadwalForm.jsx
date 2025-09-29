import React, { useState } from "react";
import styles from "/src/assets/styles/JadwalForm.module.css";

//fix state
export default function JadwalForm() {
  
 const [addResepsi, setAddResepsi] = useState(false);

  const handleAddResepsi = () => {
    setAddResepsi(true); // ubah state jadi true ketika tombol diklik
  }
  
  return (
    <>
      <form>
        {addResepsi && <h2 className={styles.title}>Akad</h2>}
        <input
          type="date"
          name="tanggal-akad"
          placeholder="Pilih tanggal akad"
          className={styles.input}
        />

        <input
          type="time"
          name="waktu-akad"
          placeholder="Pilih waktu akad"
          className={styles.input}
        />
        {addResepsi && <h2 className={styles.title}>Resepsi</h2>}
        {addResepsi && (
          <input
            type="date"
            name="tanggal-resepsi"
            placeholder="Pilih tanggal resepsi"
            className={styles.input}
          />
        )}
        {addResepsi && (
          <input
            type="time"
            name="waktu-resepsi"
            placeholder="Pilih waktu resepsi"
            className={styles.input}
          />
        )}
        <button type="button" className={styles.tambahResepsi} onClick={handleAddResepsi}>
          Tambah resepsi
        </button>
      </form>
    </>
  );
}
