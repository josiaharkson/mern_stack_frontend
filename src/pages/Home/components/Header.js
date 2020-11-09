import React from "react";

// Import css style module
import Styles from "../css/Header.module.css";

const Header = ({ toggleSignupComponent }) => {
  return (
    <div className={Styles.root}>
      <div className={Styles.text_main}>Apply and hear back everytime</div>
      <div className={Styles.text_secondary}>
        Exploring internships or jobs? Say good-bye to the typical job portals
        and use the power of Artificial Intelligence to become successful,
        faster.
      </div>
      <div
        className={Styles.button}
        onClick={() => toggleSignupComponent(true)}
      >
        Get Started
      </div>
    </div>
  );
};

export default Header;
