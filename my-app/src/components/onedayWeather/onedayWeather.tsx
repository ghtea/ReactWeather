import React from "react";
import styles from "./onedayWeather.module.css";

const OnedayWeather = () => {
  return (
    <section className={styles.content}>
      <span className={styles.day}>화요일</span>
      <img className={styles.weather} src="" alt="weather icon" />
      <img className={styles.tempImg} src="" alt="" />
      <span className={styles.tempSpan}>8</span>
      <img className={styles.tempImg} src="" alt="" />
      <span className={styles.tempSpan}>-3</span>
    </section>
  );
};

export default OnedayWeather;
