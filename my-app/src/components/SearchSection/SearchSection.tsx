import React, { useRef, FunctionComponent, useState, useCallback } from "react";
import {OpenWeather} from "../../service/openWeather";
import styles from "./SearchSection.module.css";


type OpenWeatherLocation = {
  name: string;
  local_names: Record<string, string>
  lat: number
  lon: number
  country: string
}

export type SearchSectionProps = {
  openWeather: OpenWeather;
  onChange: Function;
}

export const SearchSection: FunctionComponent<SearchSectionProps> = ({
  openWeather,
  onChange,
}) => {
  const [locationOptions, setLocationOptions] = useState<OpenWeatherLocation[]>([])

  const inputRef = useRef<HTMLInputElement>(null);


  const handleBlur = useCallback(() => {
    if (!inputRef.current) return;

    openWeather
      .getLatAndLon<OpenWeatherLocation[]>(inputRef.current.value) //
      .then((result) => {
        const koreaLocations = result.filter(item => item.country === "KR")
        
        // option을 다이나믹하게 만들기
        setLocationOptions(koreaLocations)
      });
  },[openWeather]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event)=>{
    const selectedLocation = locationOptions.find(item => item.name === event.target.value)

    if (selectedLocation){
      onChange({
        lat: selectedLocation.lat,
        lon: selectedLocation.lon
      })
    }
  },[locationOptions, onChange])

  return (
    <section className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="city"
        list="location"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <datalist id="location">
        {locationOptions.map(item => (
          <option 
            key={`location-option-${item.lat}-${item.lon}`}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </datalist>
    </section>
  );
};
