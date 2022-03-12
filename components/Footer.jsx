import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <a href="/contact">
            <span className={style.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" width="40px" height="40px" alt="" />
          </a>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={style.cardItem}>
          CONTACT@LAMA.DEV <br /> 213 1234
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={style.cardItem}>
          @ 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
