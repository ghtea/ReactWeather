import React from "react";
import styles from "./App.module.css";
import Search from "./components/search/search";
import TodayWeather from "./components/todayWeather/todayWeather";
import WeeklyWeather from "./components/weeklyWeather/weeklyWeather";
import OpenWeather from "./service/openWeather";

function App({ openWeather }: { openWeather: OpenWeather }) {
  openWeather.getTodayWeather();

  return (
    <div className="App">
      <section className={styles.container}>
        <Search />
        <TodayWeather />
        <WeeklyWeather />
      </section>
    </div>
  );
}

export default App;
