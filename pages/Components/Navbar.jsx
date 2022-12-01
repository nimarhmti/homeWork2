import React, { useState } from "react";
import styles from "./Navbar.module.css";

const navbarListItems = [
  "بازی ریاضی",
  "تبدیل مبنا",
  "پیش‌بینی آب و هوا",
  "تیم فوتبال",
];

const Navbar = () => {
  const [selected, setSelected] = useState("بازی ریاضی");

  const handelSelectItem = (e) => {
    const { id } = e.target;

    setSelected(id);
  };

  const renderListItems = (item, index) => {
    return (
      <li
        className={`${styles.navbar__item} ${
          selected === item ? styles.selected : ""
        }`}
        key={index}
        id={item}
        onClick={handelSelectItem}
      >
        {item}
      </li>
    );
  };
  return (
    <section className={styles.navbar__container}>
      <ul className={styles.navbar__list}>
        {navbarListItems.map(renderListItems)}
      </ul>
    </section>
  );
};

export default Navbar;
