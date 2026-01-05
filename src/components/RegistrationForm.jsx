import React from "react";
import { useNavigate } from "react-router";
import styles from "/src/assets/styles/RegistrationForm.module.css";


//fix state
export default function RegistrationForm({ isRegistered }) {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/nama-pria");
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />

        {!isRegistered && (
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className={styles.input}
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
        />

        {isRegistered ? (
          <button type="submit" className={styles.button}>
            Masuk
          </button>
        ) : (
          <button type="submit" className={styles.button}>
            Daftar
          </button>
        )}
      </form>
    </>
  );
}
