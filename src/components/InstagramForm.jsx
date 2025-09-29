import React from "react";
import styles from "/src/assets/styles/InstagramForm.module.css";

//add props
export default function InstagramForm({value, onChange}) {
  return (
    <>
      <form>
        <input
          type="text"
          name="instagram-pria"
          placeholder="Instagram pengantin pria"
          className={styles.input}
          value={value.instagramPria}
          onChange={(e) => onChange({...value, instagramPria: e.target.value})}
        />

         <input
          type="text"
          name="instagram-wanita"
          placeholder="Instagram pengantin wanita"
          className={styles.input}
          value={value.instagramWanita}
          onChange={(e) => onChange({...value, instagramWanita: e.target.value})}
        />
      </form>
    </>
  );
}
