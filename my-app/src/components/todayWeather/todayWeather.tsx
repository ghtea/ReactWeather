import React from "react";
import styles from "./todayWeather.module.css";
import clear from "../../images/clear.svg";
import OpenWeather from "../../service/openWeather";

const TodayWeather = ({ openWeather }: { openWeather: OpenWeather }) => {
  const result = openWeather
    .getTodayWeather() //
    .then(console.log);

  return (
    <section className={styles.container}>
      <img className={styles.img} src={clear} alt="today icon" />
      <div className={styles.text}>
        <h3 className={styles.location}>연수구</h3>
        <h2 className={styles.temperature}>10/-3</h2>
      </div>
    </section>
  );
};

export default TodayWeather;
