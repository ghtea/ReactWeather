import React, { useRef } from "react";
import OpenWeather from "../../service/openWeather";
import styles from "./search.module.css";

type location = {
  lat: number;
  lon: number;
  country?: string;
};

const Search = ({
  openWeather,
  handleChange,
}: {
  openWeather: OpenWeather;
  handleChange: Function;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    if (!inputRef.current) return;

    openWeather
      .getLatAndLon<Array<location>>(inputRef.current.value) //
      .then((result) => {
        const koreaLocations = result.map((res) => {
          if (res.country === "KR") {
            console.log(res);
            return res;
          }
          return null;
        });

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
        placeholder="지역명"
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

export default Search;
