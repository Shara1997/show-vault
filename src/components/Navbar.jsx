import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">
            <IoMdArrowRoundBack className={styles.home} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
