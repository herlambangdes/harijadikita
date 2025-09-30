import React, { useState } from "react";
import { Link } from "react-router";
import styles from "/src/assets/styles/Registration.module.css";
import RegistrationForm from "../components/RegistrationForm.jsx";
import SocialRegistration from "../components/SocialRegistration.jsx";

//If user has registered show Masuk, if not show Daftar
//fix state
export default function Registration({ isRegistered }) {
  const src = {
    logo: "https://ik.imagekit.io/harijadikita/logo/harijadikita%20logo%20combination.svg?updatedAt=1757920873117",
    google:
      "https://ik.imagekit.io/harijadikita/icon/Google%20Icon.svg?updatedAt=1757925395716",
  };

  return (
    <div>
      {/* logo*/}
      <div className={styles.logo}>
        <Link to="/">
          <img src={src.logo} />
        </Link>
      </div>
      <div className={styles.flex}>
        {isRegistered ? (
          <>
            <h1>Masuk</h1>
            <p>Lanjutkan buat undangan nikah digital kamu hanya 5 menit.</p>
          </>
        ) : (
          <>
            <h1>Daftar</h1>
            <p>Buat undangan nikah digital sendiri hanya 5 menit.</p>
          </>
        )}
        {/* form input*/}
        <RegistrationForm isRegistered={isRegistered} />
        <hr className={styles.hr} />
        {/*social registration*/}
        <SocialRegistration isRegistered={isRegistered} />
      </div>
    </div>
  );
}
