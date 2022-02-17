import React, { useEffect, useState } from "react";
import styles from "./TodayWeather.module.css";
import {OpenWeather, Location, Weather, Tempertature} from "../../service/openWeather";


export const TodayWeather = ({
  openWeather,
  getIconByDescription,
  handleBackground,
  userLocation,
}: {
  openWeather: OpenWeather;
  getIconByDescription: Function;
  handleBackground: Function;
  userLocation: Location;
}) => {
  // 이거 한 번에 가지고 오고 싶을 땐 어떻게 하지?
  // 🔥 type을 지정해야 .으로 값을 가져올 수 있다.
  const [todayWeather, setTodayWeather] = useState<Weather>({
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d",
  });
  const [todayTempertature, setTodayTempertature] = useState<Tempertature>({
    temp: 20,
    feels_like: 20,
    temp_min: 10,
    temp_max: 30,
    pressure: 20,
    humidity: 20,
  });
  const [todayLocation, setTodayLocation] = useState<string>();

  useEffect(() => {
    openWeather
      .getTodayWeather<{
        weather: Array<Weather>;
        main: Tempertature;
        name: string;
      }>(userLocation)
      .then(({ weather, main, name }) => {
        setTodayWeather(weather[0]);
        setTodayTempertature(main);
        setTodayLocation(name);
        handleBackground(weather[0].description);
      });
  }, [openWeather, userLocation]);

  return (
    <section className={styles.container}>
      <img
        className={styles.img}
        src={getIconByDescription(todayWeather.description)}
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