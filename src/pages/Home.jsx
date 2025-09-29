import React from "react";
import { Link } from "react-router";
import styles from "../assets/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.gridContainer}>
      {/* Header */}
      <header>
        <img
          src="https://ik.imagekit.io/herlambangdes/Asset/Harijadikita/harijadikita%20logo%20combination.svg?updatedAt=1751369135547"
          className={styles.logo}
          alt="Harijadikita logo"
        />
      </header>

      {/* Left */}
      <section className={styles.left}>
        <div className={styles.heroContainer}>
          <div className={styles.copywriting}>
            <h1 className={`${styles.headline} ${styles.textFocusIn}`}>
              Buat undangan nikah digital cuma
              <ul className={styles.underline}>
                <li className={styles.li1}>5 menit.</li>
                <li className={styles.li2}>Rp199K.</li>
              </ul>
            </h1>
            <p className={`${styles.description} ${styles.textFocusIn}`}>
              Undang banyak tamu ke hari jadi pernikahan kamu lebih mudah,
              cepat, dan modern dengan berbagai tema undangan nikah digital yang
              cantik.
            </p>
          </div>
          <div className={styles.cta}>
            <Link
              to="/daftar"
              className={`${styles.btnBuatUndangan} ${styles.fadeInHeartbeat}`}
            >
              Buat undangan sekarang
            </Link>
            {/*
            <button className={styles.btnTemaUndangan}>
              Lihat tema undangan
            </button>
*/}
          </div>
        </div>
      </section>

      {/* Right */}
      <section className={styles.right}>
        <div className={styles.parent}>
          <div className={styles.photoContainer}>
            <div className={styles.item1}>
              <img
                src="https://ik.imagekit.io/herlambangdes/Asset/Harijadikita/Couple-1.jpg?updatedAt=1750670881163"
                alt="Couple 1"
              />
            </div>
            <div className={styles.item2}>
              <img
                src="https://ik.imagekit.io/herlambangdes/Asset/Harijadikita/Couple-2.jpg?updatedAt=1750671082686"
                alt="Couple 2"
              />
            </div>
            <div className={styles.item3}>
              <img
                src="https://ik.imagekit.io/herlambangdes/Asset/Harijadikita/Couple-3.jpg?updatedAt=1750671209086"
                alt="Couple 3"
              />
            </div>
            <div className={styles.item4}>
              <img
                src="https://ik.imagekit.io/herlambangdes/Asset/Harijadikita/Couple-4.jpg?updatedAt=1750671287768"
                alt="Couple 4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
