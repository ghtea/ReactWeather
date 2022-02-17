import React, { useState } from "react";
import styles from "./App.module.css";
import Search from "./components/search/search";
import TodayWeather from "./components/todayWeather/todayWeather";
import WeeklyWeather from "./components/weeklyWeather/weeklyWeather";
import OpenWeather from "./service/openWeather";

// type을 props로 전달할 수 없나?
type location = {
  lat: number;
  lon: number;
  country?: string;
};

function App({ openWeather }: { openWeather: OpenWeather }) {
  const [userLocation, setUserLocation] = useState<location>({
    // seoul
    lat: 37.5666791,
    lon: 126.9782914,
  });

  const handleChange = (location: location) => {
    setUserLocation(location);
  };

  return (
    <div className="App">
      <section className={styles.container}>
        <Search openWeather={openWeather} handleChange={handleChange} />
        <TodayWeather openWeather={openWeather} userLocation={userLocation} />
        <WeeklyWeather openWeather={openWeather} userLocation={userLocation} />
      </section>
    </div>
  );
}

export default App;
