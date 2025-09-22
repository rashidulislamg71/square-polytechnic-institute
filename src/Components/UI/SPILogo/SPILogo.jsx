import React from 'react';
import spi_logo from "/public/images/SPI_Logo.png";
import styles from "./SPILogo.module.css";
import { Link } from 'react-router-dom';

const SPILogo = () => {
    return (
        <Link to="/" className="flex items-center gap-1">
            <img className={`${styles.logo}`} src={spi_logo} alt="Square Polytechnic institute Logo" />
            <h3><b className={`${styles.logo_text}`} >স্কয়ার পলিটেকনিক  <br /> ইন্সটিটিউট</b></h3>
        </Link>
    );
};

export default SPILogo;