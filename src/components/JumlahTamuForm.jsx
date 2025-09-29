import React from "react";
import styles from "/src/assets/styles/JumlahTamuForm.module.css";

//add props
export default function JumlahTamuForm() {
  return (
    <>
      <form>
        <input
          type="text"
          name="jumlah-tamu"
          placeholder="Jumlah tamu yang diundang"
          className={styles.input}
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </form>
    </>
  );
}
