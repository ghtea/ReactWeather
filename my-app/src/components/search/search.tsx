import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = ({ handleChange }: { handleChange: Function }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    handleChange(inputRef.current && inputRef.current.value);
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
