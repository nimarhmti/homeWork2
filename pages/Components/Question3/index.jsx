import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Question3.module.css";
import rainBackground from "../../../asset/rain.jpg";
import Image from "next/image";

const Index = () => {
  const [cityName, setCityName] = useState("");
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const searchCity = async () => {
    if (cityName.trim().length === 0) {
      setError(true);
      return;
    }
    try {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q={${cityName}}&appid=40fd588f23faabc3336ade4cf9224ba3`
        )
        .then(({ data }) => {
          const { lat, lon } = data[0];

          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=40fd588f23faabc3336ade4cf9224ba3`
            )
            .then((response) => {
              const { data } = response;
              setResult(data);
            });
        });
    } catch {}
  };
  const handleChangeInput = (e) => {
    setCityName(e.target.value);
  };

  return (
    <section className={styles.question3__container}>
      <div className={styles.search__box}>
        <label>Enter city name</label>
        <input onChange={handleChangeInput} />
        <button onClick={searchCity}>جستجو</button>
      </div>
      <div className={styles.weather__result}>
        {result.weather && (
          <>
            <p>Overall : {result?.weather[0]?.main}</p>
            <p> Details : {result?.weather[0]?.description}</p>
            <p>
              Temperature Feels like :{" "}
              {Math.floor(result.main.feels_like - 273)}c
            </p>
          </>
        )}
        {result.weather && result.weather[0].main === "Clouds" && (
          <Image src={rainBackground} className={styles.cloudy} alt="rain" />
        )}
      </div>
    </section>
  );
};

export default Index;
