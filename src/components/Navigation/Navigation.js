import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navContainer}>
      <NavLink to="/register" exact className={styles.navLink}>
        Sign Up
      </NavLink>
      <NavLink to="/login" exact className={styles.navLink}>
        Log In
      </NavLink>
    </div>
  );
}
