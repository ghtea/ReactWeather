import React from "react";
import styles from "./App.module.css";
import Search from "./components/search/search";

function App() {
  return (
    <div className="App">
      <section className={styles.container}>
        <Search />
      </section>
    </div>
  );
}

export default App;
