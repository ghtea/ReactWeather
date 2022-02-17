import React, { useEffect, useState } from "react";
import {OpenWeather} from "../../service/openWeather";
import {OnedayWeather} from "../OnedayWeather";
import styles from "./WeeklyWeather.module.css";

type location = {
  lat: number;
  lon: number;
  country?: string;
};

type weather = [
  {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
];

type temperature = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

type daily = {
  dt: number;
  temp: temperature;
  weather: weather;
};

const NEXT_DAYS = 5;

export const WeeklyWeather = ({
  openWeather,
  getIconByDescription,
  userLocation,
}: {
  openWeather: OpenWeather;
  getIconByDescription: Function;
  userLocation: location;
}) => {
  const [nextDaysForcast, setNextDaysForcast] = useState<Array<daily>>([
    {
      dt: 1645034400,
      temp: {
        day: 19.03,
        min: 14.33,
        max: 20.9,
        night: 18.18,
        eve: 18.83,
        morn: 14.33,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
    },
    {
      dt: 1645120800,
      temp: {
        day: 19.85,
        min: -0.17,
        max: 20.8,
        night: -0.17,
        eve: 4.8,
        morn: 18.42,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
    },
    {
      dt: 1645207200,
      temp: {
        day: 7.46,
        min: -1.9,
        max: 10.63,
        night: 3.95,
        eve: 6.66,
        morn: -1.39,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
    },
    {
      dt: 1645293600,
      temp: {
        day: 13.41,
        min: 0.93,
        max: 15.53,
        night: 7.46,
        eve: 10.67,
        morn: 0.93,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
    {
      dt: 1645380000,
      temp: {
        day: 15.45,
        min: 4.1,
        max: 18.03,
        night: 12.1,
        eve: 13.57,
        morn: 4.1,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
    },
  ]);

  useEffect(() => {
    openWeather
      .getWeeklyWeather<{
        daily: Array<daily>;
      }>(userLocation) //
      .then(({ daily }) => {
        setNextDaysForcast(daily.slice(1, NEXT_DAYS + 1));
      });
  }, [openWeather, userLocation]);

  return (
    <section className={styles.container}>
      {nextDaysForcast &&
        nextDaysForcast.map((dayForcast) => {
          return (
            <OnedayWeather
              key={dayForcast.dt}
              getIconByDescription={getIconByDescription}
              dt={dayForcast.dt}
              minTemp={dayForcast.temp.min}
              maxTemp={dayForcast.temp.max}
              description={dayForcast.weather[0].description}
            />
          );
        })}
    </section>
  );
};