import React, { useState } from "react";
import styles from "./App.module.css";
import {SearchSection} from "./components/SearchSection";
import {TodayWeather} from "./components/TodayWeather";
import {WeeklyWeather} from "./components/WeeklyWeather";
import OpenWeather from "./service/openWeather";

// background

// icons
import brokenClouds from "../src/images/icons/weather/brokenClouds.svg";
import clearDay from "../src/images/icons/weather/clearDay.svg";
import fewClouds from "../src/images/icons/weather/fewClouds.svg";
import rain from "../src/images/icons/weather/rain.svg";
import scatterdClouds from "../src/images/icons/weather/scatterdClouds.svg";
import snow from "../src/images/icons/weather/snow.svg";
import thunderstorm from "../src/images/icons/weather/thunderstorm.svg";
import mist from "../src/images/icons/weather/mist.svg";

// type을 props로 전달할 수 없나?
type location = {
  lat: number;
  lon: number;
  country?: string;
};

const getIconByDescription = (description: string): string => {
  if (description.includes("thunderstorm")) {
    return thunderstorm;
  } else if (description.includes("drizzle")) {
    return rain;
  } else if (description.includes("rain")) {
    if (description.includes("freezing")) {
      return snow;
    } else return "rain";
  } else if (description.includes("snow")) {
    return snow;
  } else if (description.includes("clouds")) {
    if (description.includes("few")) {
      return fewClouds;
    } else if (description.includes("scatterd")) {
      return scatterdClouds;
    } else return brokenClouds;
  } else if (description.includes("clear")) {
    return clearDay;
  } else {
    return mist;
  }
};

function App({ openWeather }: { openWeather: OpenWeather }) {
  const [userLocation, setUserLocation] = useState<location>({
    // seoul
    lat: 37.5666791,
    lon: 126.9782914,
  });

  const [background, setBackground] = useState<string>();

  const handleChange = (location: location) => {
    setUserLocation(location);
  };

  const handleBackground = (description: string): void => {
    if (description.includes("clear")) {
      setBackground(styles.sunny);
      return;
    } else if (description.includes("snow")) {
      setBackground(styles.snowing);
      return;
    } else if (description.includes("thunderstorm" || "drizzle" || "rain")) {
      setBackground(styles.rainy);
      return;
    } else {
      setBackground(styles.cloudy);
      return;
    }
  };

  return (
    <div className="App">
      <section className={`${styles.container} ${background}`}>
        <SearchSection openWeather={openWeather} handleChange={handleChange} />
        <TodayWeather
          openWeather={openWeather}
          getIconByDescription={getIconByDescription}
          handleBackground={handleBackground}
          userLocation={userLocation}
        />
        <WeeklyWeather
          openWeather={openWeather}
          getIconByDescription={getIconByDescription}
          userLocation={userLocation}
        />
      </section>
    </div>
  );
}

export default App;
