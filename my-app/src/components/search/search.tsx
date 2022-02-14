import React from "react";
import styles from "./search.module.css";

const Search = () => {
  return (
    <section className={styles.container}>
      <input className={styles.input} type="text" list="location" />
      <datalist id="location">
        <option value="연수구"></option>
        <option value="중구"></option>
        <option value="남구"></option>
      </datalist>
    </section>
  );
};

export default Search;
