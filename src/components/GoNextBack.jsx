import React, { useState } from "react";
import styles from "/src/assets/styles/GoNextBack.module.css";

//add props
export default function GoNextBack({ firstPage, onNext, onBack, currentStep, totalSteps = 10 }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className={styles.container}>
      <button className={styles.nextButton} onClick={onNext}>Berikutnya</button>
      {!firstPage && <button className={styles.backButton} onClick={onBack}>Sebelumnya</button>}

      {currentStep && (
        <div className={styles.stepperContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className={styles.stepText}>
            {currentStep} dari {totalSteps} langkah
          </span>
        </div>
      )}
    </div>
  );
}
