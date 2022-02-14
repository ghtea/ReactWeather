import React from "react";
import OnedayWeather from "../onedayWeather/onedayWeather";
import styles from "./weeklyWeather.module.css";

const WeeklyWeather = () => {
  return (
    <section className={styles.container}>
      <OnedayWeather />
    </section>
  );
};

export default WeeklyWeather;
