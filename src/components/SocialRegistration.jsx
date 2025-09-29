import React from 'react';
import styles from '/src/assets/styles/SocialRegistration.module.css';
import { Link } from 'react-router';

export default function SocialRegistration({ isRegistered }) {
  const src = {
    google: 'https://ik.imagekit.io/harijadikita/icon/Google%20Icon.svg?updatedAt=1757925395716'
  };

  return (
    <div className={styles.flexSocial}>
      {/* Tombol Google */}
      <button type="button" className={styles.social}>
        <img src={src.google} alt="Google" className={styles.google} />
        {isRegistered ? 'Masuk dengan Google' : 'Daftar dengan Google'}
      </button>

      {/* Kondisional UI */}
      {isRegistered ? (
        <>
          <a href="#" className={styles.forgotPass}>
            Lupa password?
          </a>
          <p className={styles.hasNotAccount}>
            Tidak punya akun?
            <Link to="/daftar" className={styles.signup}>Daftar</Link>
          </p>
        </>
      ) : (
        <p className={styles.hasAccount}>
          Sudah punya akun?
          <Link to="/masuk" className={styles.login}>Masuk</Link>
        </p>
      )}
    </div>
  );
}
