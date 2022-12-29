import React from "react";
import style from "./footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p> Follow us on -></p>
      <div className={style.footer_container}>
        <a
          href="https://www.facebook.com/profile.php?id=100069593825824"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className={style.icon} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100069593825824"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className={style.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/hasanmd91/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={style.icon} />
        </a>
        <a
          href="https://github.com/hasanmd91?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaGithub className={style.icon} />
        </a>{" "}
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          {" "}
          <FaYoutube className={style.icon} />
        </a>{" "}
      </div>
      <p>All rights reserved @Hasan 2022</p>
    </footer>
  );
};

export default Footer;
