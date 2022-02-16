import React, { useState } from "react";
import styles from "./App.module.css";
import Search from "./components/search/search";
import TodayWeather from "./components/todayWeather/todayWeather";
import WeeklyWeather from "./components/weeklyWeather/weeklyWeather";
import OpenWeather from "./service/openWeather";

type location = {
  lat: number;
  lon: number;
  country?: string;
};

function App({ openWeather }: { openWeather: OpenWeather }) {
  // const showIconByMain = (main: string) => {
  //   switch (main) {
  //     case "Clouds": {
  //       return "cloudy";
  //     }
  //   }
  // };

  const [userLocation, setUserLocation] = useState<location>({
    lat: 0,
    lon: 0,
  });

  const handleChange = (location: location) => {
    setUserLocation(location);
  };

  return (
    <div className="App">
      <section className={styles.container}>
        <Search openWeather={openWeather} handleChange={handleChange} />
        <TodayWeather openWeather={openWeather} userLocation={userLocation} />
        <WeeklyWeather />
      </section>
    </div>
  );
}

export default App;
