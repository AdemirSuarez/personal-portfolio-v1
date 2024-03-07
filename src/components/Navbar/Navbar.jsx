import React, { useState } from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnIcon = "images/icons/burger-menu.png";
  const closeBtnIcon = "images/icons/close-icon.ico";

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={`${styles.menuBtn} ${styles.closeBtn}`}
          src={menuOpen ? menuBtnIcon : closeBtnIcon}
          alt="menu-btn"
          onClick={()=>setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#projects">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
