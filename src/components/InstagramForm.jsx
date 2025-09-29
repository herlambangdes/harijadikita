import React from "react";
import styles from "/src/assets/styles/InstagramForm.module.css";

//add props
export default function InstagramForm() {
  return (
    <>
      <form>
        <input
          type="text"
          name="instagram-pria"
          placeholder="Instagram pengantin pria"
          className={styles.input}
        />

         <input
          type="text"
          name="instagram-wanita"
          placeholder="Instagram pengantin wanita"
          className={styles.input}
        />
      </form>
    </>
  );
}
