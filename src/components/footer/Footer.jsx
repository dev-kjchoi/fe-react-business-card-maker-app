import React, { memo } from "react";
import styles from "./Footer.module.css";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>Copylight ⓒ kjchoi</p>
  </footer>
));

export default Footer;
