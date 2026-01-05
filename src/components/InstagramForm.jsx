import React from "react";
import styles from "/src/assets/styles/InstagramForm.module.css";

//add props
export default function InstagramForm({ value, onChange }) {
  return (
    <>
      <form>
        <input
          type="text"
          name="instagramPria"
          placeholder="Instagram pengantin pria"
          className={styles.input}
          value={value.instagramPria}
          onChange={onChange}
        />

        <input
          type="text"
          name="instagramWanita"
          placeholder="Instagram pengantin wanita"
          className={styles.input}
          value={value.instagramWanita}
          onChange={onChange}
        />
      </form>
    </>
  );
}
