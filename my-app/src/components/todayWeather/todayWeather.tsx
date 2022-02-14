import React from "react";
import styles from "./todayWeather.module.css";
import sunny from "../../images/sunny.svg";

const TodayWeather = () => {
  return (
    <section className={styles.container}>
      <img className={styles.img} src={sunny} alt="today icon" />
      {/* <svg className={styles.img} xmlns="./sunny.svg"></svg> */}
      <div className={styles.text}>
        <h3 className={styles.location}>연수구</h3>
        <h2 className={styles.temperature}>10/-3</h2>
      </div>
    </section>
  );
};

export default TodayWeather;
