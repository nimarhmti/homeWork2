import { Chip } from "@mui/material";
import React, { useState } from "react";
import styles from "./QuestionTwo.module.css";

const Index = () => {
  const [selectedBase, setSelectedBase] = useState("2");
  const [inputValue, setInputValue] = useState(0);

  const [baseCollection, setBaseCollection] = useState({
    base2: "",
    base3: "",
    base4: "",
    base5: "",
    base6: "",
    base7: "",
    base8: "",
    base9: "",
    base10: "",
    base11: "",
    base12: "",
    base13: "",
    base14: "",
    base15: "",
    base16: "",
  });
  const handleChangeInput = (e) => {
    const { value } = e.target;
    if (Number(value[value.length - 1]) >= Number(selectedBase)) return;
    setInputValue(value);
    const decimal = parseInt(value, selectedBase);

    setBaseCollection({
      base2: decimal.toString(2),
      base3: decimal.toString(3),
      base4: decimal.toString(4),
      base5: decimal.toString(5),
      base6: decimal.toString(6),
      base7: decimal.toString(7),
      base8: decimal.toString(8),
      base9: decimal.toString(9),
      base10: decimal.toString(10),
      base11: decimal.toString(11),
      base12: decimal.toString(12),
      base13: decimal.toString(13),
      base14: decimal.toString(14),
      base15: decimal.toString(15),
      base16: decimal.toString(16),
    });
  };
  const handleChangeSelectedBase = (e) => {
    setSelectedBase(e.target.value);
  };
  return (
    <section className={styles.questionTwo__container}>
      <div className={styles.input__section}>
        <label>From Base</label>
        <select onChange={handleChangeSelectedBase}>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
        </select>
        <label>number</label>
        <input onChange={handleChangeInput} type="number" value={inputValue} />
      </div>
      <div className={styles.base__list}>
        <Chip label="results" color="success" />
        <br />
        <p>base 2 = {baseCollection.base2} </p>
        <p>base 3 = {baseCollection.base3}</p>
        <p>base 4 = {baseCollection.base4}</p>
        <p>base 5 = {baseCollection.base5}</p>
        <p>base 6 = {baseCollection.base6}</p>
        <p>base 7 = {baseCollection.base7}</p>
        <p>base 8 = {baseCollection.base8}</p>
        <p>base 9 = {baseCollection.base9}</p>
        <p>base 10 = {baseCollection.base10}</p>
        <p>base 11 = {baseCollection.base11}</p>
        <p>base 12 = {baseCollection.base12}</p>
        <p>base 13 = {baseCollection.base13}</p>
        <p>base 14 = {baseCollection.base14}</p>
        <p>base 15 = {baseCollection.base15}</p>
        <p>base 16 = {baseCollection.base16}</p>
      </div>
    </section>
  );
};

export default Index;
