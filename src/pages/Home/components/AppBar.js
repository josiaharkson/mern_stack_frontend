import React from "react";

// Import css style module
import Styles from "../css/AppBar.module.css";

// Import Popover component from Material UI
import Popover from "@material-ui/core/Popover";

const AppBar = ({ toggleSignupComponent, toggleLoginComponent }) => {
  return (
    <div className={Styles.root}>
      <div className={Styles.section_one}>
        <DehazeIcon />

        <div className={Styles.main_logo} />
      </div>
      <div className={Styles.section_two}>
        <div className={Styles.section_two_a}>
          <PopoverComponent />

          <div>
            <span className={Styles.instant_logo} />
            <span>Instantly Apply</span>
          </div>
          <div>
            <span>Pricing</span>
          </div>
          <div>
            <span>About Us</span>
          </div>
        </div>
        <div className={Styles.section_two_b}>
          <div
            className={Styles.signup_btn}
            onClick={() => toggleSignupComponent(true)}
          >
            Sign Up
          </div>
          <div
            className={Styles.login_btn}
            onClick={e => toggleLoginComponent(e, true)}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

const PopoverComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div>
        <span>For You</span>
        <span
          aria-describedby={id}
          onClick={handleClick}
          className={Styles.path_svg}
        />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{ marginTop: 35 }}
      >
        <div className={Styles.popover_body}>
          <span onClick={handleClose}>Find matching internship</span>
          <span onClick={handleClose}>Hire right talent</span>
          <span onClick={handleClose}>Work from home</span>
        </div>
      </Popover>
    </>
  );
};

const DehazeIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div
        aria-describedby={id}
        onClick={handleClick}
        className={Styles.dehaze_icon}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{ marginTop: 35 }}
      >
        <div className={Styles.popover_body}>
          <span onClick={handleClose}>Find matching internship</span>
          <span onClick={handleClose}>Hire right talent</span>
          <span onClick={handleClose}>Work from home</span>
        </div>
      </Popover>
    </>
  );
};

export default AppBar;
