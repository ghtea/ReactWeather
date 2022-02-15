import React, { useEffect, useState } from "react";
import styles from "./todayWeather.module.css";
import clear from "../../images/icons/clear.svg";
import OpenWeather from "../../service/openWeather";

type weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type tempertature = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type location = string;

const TodayWeather = ({
  openWeather,
  userLocation,
}: {
  openWeather: OpenWeather;
  userLocation: string;
}) => {
  // 이거 한 번에 가지고 오고 싶을 땐 어떻게 하지?
  // 🔥 type을 지정해야 .으로 값을 가져올 수 있다.
  const [todayWeather, setTodayWeather] = useState<weather>({
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d",
  });
  const [todayTempertature, setTodayTempertature] = useState<tempertature>();
  const [todayLocation, setTodayLocation] = useState<location>();

  useEffect(() => {
    openWeather
      .getTodayWeather<{
        weather: Array<weather>;
        main: tempertature;
        name: string;
      }>(userLocation)
      .then(({ weather, main, name }) => {
        setTodayWeather(weather[0]);
        setTodayTempertature(main);
        setTodayLocation(name);
      });
  }, [openWeather, userLocation]);

  return (
    <section className={styles.container}>
      <img
        className={styles.img}
        src={`http://openweathermap.org/img/wn/${todayWeather.icon}@2x.png`}
        alt="today icon"
      />
      <div className={styles.text}>
        <h3 className={styles.location}>{todayLocation}</h3>
        <h2 className={styles.currentTemp}>
          {todayTempertature?.temp.toFixed(0)}
        </h2>
        <span className={styles.minMaxTemp}>
          {todayTempertature?.temp_max.toFixed(0)}/
          {todayTempertature?.temp_min.toFixed(0)}
        </span>
      </div>
    </section>
  );
};

export default TodayWeather;
