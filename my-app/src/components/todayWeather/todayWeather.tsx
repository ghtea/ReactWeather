import React, { useEffect, useState } from "react";
import styles from "./todayWeather.module.css";
import clear from "../../images/clear.svg";
import OpenWeather from "../../service/openWeather";

const TodayWeather = ({ openWeather }: { openWeather: OpenWeather }) => {
  const [today, setToday] = useState<Object>(openWeather.getTodayWeather());

  const onClick = () => {
    openWeather.getTodayWeather().then((result) => setToday(result));
  };

  return (
    <section className={styles.container}>
      <button onClick={onClick}></button>
      <img className={styles.img} src={clear} alt="today icon" />
      <div className={styles.text}>
        {today && <h3 className={styles.location}>{today.name}</h3>}
        {!today && <h3 className={styles.location}>None</h3>}
        <h2 className={styles.temperature}>10/-3</h2>
      </div>
    </section>
  );
};

export default TodayWeather;
