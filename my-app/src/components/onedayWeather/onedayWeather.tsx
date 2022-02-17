import React from "react";
import styles from "./onedayWeather.module.css";

function getUnixTimeStamp(dt: number): number {
  let date = new Date(dt * 1000);
  return date.getDate();
}

const OnedayWeather = ({
  dt,
  minTemp,
  maxTemp,
  icon,
}: {
  dt: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
}) => {
  return (
    <section className={styles.content}>
      <span className={styles.day}>{getUnixTimeStamp(dt)}일</span>
      <img
        className={styles.weather}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
      <img className={styles.tempImg} src="" alt="" />
      <span className={styles.tempSpan}>{maxTemp.toFixed(0)}</span>
      <img className={styles.tempImg} src="" alt="" />
      <span className={styles.tempSpan}>{minTemp.toFixed(0)}</span>
    </section>
  );
};

export default OnedayWeather;
