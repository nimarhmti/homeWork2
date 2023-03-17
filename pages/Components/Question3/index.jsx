import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Question3.module.css";
import rainBackground from "../../../asset/rain.jpg";
import Image from "next/image";
import CloudIcon from "@mui/icons-material/Cloud";
import { Box, Card, TextField, Typography } from "@mui/material";
const api = {
  key: "13395e2f7a8840c3ce7b9727dde7e360",
  base: "https://api.openweathermap.org/data/2.5/",
};
const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

const Index = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" component="h6" fontWeight={700}>
        Enter the name of a country
      </Typography>
      <TextField
        id="outlined-basic"
        label="Country"
        variant="outlined"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      {typeof weather.main != "undefined" ? (
        <Card
          sx={{
            marginTop: "20px",
            width: "600px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography textAlign="center" variant="h3" fontWeight={700}>
              {weather.name}, {weather.sys.country}
            </Typography>
            <Typography textAlign="center">
              {dateBuilder(new Date())}
            </Typography>
          </Box>
          <Box>
            <Typography textAlign="center" variant="h3" fontWeight={700}>
              {Math.round(weather.main.temp)}°c
            </Typography>
            <Typography
              textAlign="center"
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              {weather.weather[0].main} <CloudIcon />
            </Typography>
          </Box>
        </Card>
      ) : null}
    </Box>
  );
};

export default Index;
