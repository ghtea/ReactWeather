import React from "react";
import styles from "./OnedayWeather.module.css";

import hotIcon from "../../images/icons/hot.svg";
import coldIcon from "../../images/icons/cold.svg";

function getUnixTimeStamp(dt: number): string {
  const date = new Date(dt * 1000).getDate();
  const strDate = date / 10 === 0 ? "0" + date : date.toString();
  return strDate;
}

export const OnedayWeather = ({
  getIconByDescription,
  dt,
  minTemp,
  maxTemp,
  description,
}: {
  getIconByDescription: Function;
  dt: number;
  minTemp: number;
  maxTemp: number;
  description: string;
}) => {
  return (
    <section className={styles.content}>
      <span className={styles.day}>{getUnixTimeStamp(dt)}일</span>
      <img
        className={styles.weather}
        src={getIconByDescription(description)}
        alt="weather icon"
      />
      <div className={styles.temp}>
        <img className={styles.tempImg} src={hotIcon} alt="hot icon" />
        <span className={`${styles.tempSpan} ${styles.tempHot}`}>
          {maxTemp.toFixed(0)}
        </span>
      </div>
      <div className={styles.temp}>
        <img className={styles.tempImg} src={coldIcon} alt="cold icon" />
        <span className={styles.tempSpan}>{minTemp.toFixed(0)}</span>
      </div>
    </section>
  );
};
