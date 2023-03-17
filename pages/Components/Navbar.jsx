import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const navbarListItems = ["Math", "base conversion", "Weather", "Football Team"];

const Navbar = () => {
  const [selected, setSelected] = useState("");

  const handelSelectItem = (e) => {
    const { id } = e.target;
    setSelected(id);
  };

  const renderListItems = (item, index) => {
    return (
      <Link href={`#question${index + 1}`} key={index}>
        <li
          className={`${styles.navbar__item} ${
            selected === item ? styles.selected : ""
          }`}
          id={item}
          onClick={handelSelectItem}
        >
          {item}
        </li>
      </Link>
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
