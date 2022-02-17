import React, { useRef, FunctionComponent } from "react";
import {OpenWeather} from "../../service/openWeather";
import styles from "./SearchSection.module.css";

type location = {
  lat: number;
  lon: number;
  country?: string;
};

export type SearchSectionProps = {
  openWeather: OpenWeather;
  handleChange: Function;
}

export const SearchSection: FunctionComponent<SearchSectionProps> = ({
  openWeather,
  handleChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    if (!inputRef.current) return;

    openWeather
      .getLatAndLon<Array<location>>(inputRef.current.value) //
      .then((result) => {
        const koreaLocations = result.map((res) => {
          // console.log(res);
          if (res.country === "KR") {
            return res;
          }
          return null;
        });

        // option을 다이나믹하게 만들기
        if (koreaLocations[0]) {
          handleChange({
            lat: koreaLocations[0].lat,
            lon: koreaLocations[0].lon,
          });
        }
      });
  };

  return (
    <section className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="city"
        list="location"
        onBlur={onChange}
      />
      <datalist id="location">
        <option value="incheon"></option>
        <option value="seoul"></option>
        <option value="jeonju"></option>
      </datalist>
    </section>
  );
};
