import React from "react";
import PropTypes from "prop-types";

// Import Components form Material UI
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// Import css style module
import Styles from "../css/Signup.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Signup = props => {
  const { open, handleClose, toggleAuthMsgComponent } = props;
  const [currentView, setCurrentView] = React.useState("one");

  return (
    <Dialog
      onClose={() => {
        handleClose();
        setCurrentView("one");
      }}
      aria-labelledby="simple-dialog-title"
      open={open}
      TransitionComponent={Transition}
      style={{
        margin: "0 auto",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={Styles.root}>
        {currentView === "one" && (
          <ComponentOne
            handleClose={handleClose}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === "two" && (
          <ComponentTwo
            setCurrentView={setCurrentView}
            handleClose={handleClose}
            toggleAuthMsgComponent={toggleAuthMsgComponent}
          />
        )}
      </div>
    </Dialog>
  );
};

Signup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const ComponentOne = ({ setCurrentView, handleClose }) => (
  <>
    <div className={Styles.close_btn}>
      <IconButton
        onClick={() => {
          setCurrentView("one");
          handleClose();
        }}
      >
        <CloseIcon />
      </IconButton>
    </div>
    <div className={Styles.text_main}>Sign Up</div>
    <div className={Styles.text_secondary}> its's quick and easy</div>

    <Grid container spacing={1}>
      <Grid item xs={6} sm={6}>
        <TextField
          color="secondary"
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
          label="First Name"
          autoComplete="fname"
        />
      </Grid>

      <Grid item xs={6} sm={6}>
        <TextField
          color="secondary"
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
          label="Last Name"
          autoComplete="lname"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          variant="outlined"
          margin="dense"
          color="secondary"
          fullWidth
          size="small"
          label="Email"
          type="email"
          autoComplete="email"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
          type="password"
          label="Password"
          autoComplete="Password"
          color="secondary"
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
          color="secondary"
          type="password"
          label="Confirm Password"
          autoComplete="Password"
        />
      </Grid>

      <div className={Styles.button} onClick={() => setCurrentView("two")}>
        Sign Up
      </div>
    </Grid>
  </>
);

const ComponentTwo = ({
  setCurrentView,
  toggleAuthMsgComponent,
  handleClose,
}) => (
  <>
    <div className={Styles.back_btn}>
      <IconButton onClick={() => setCurrentView("one")}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </div>
    <div className={Styles.text_main_b}>OTP sent!</div>

    <TextField
      variant="outlined"
      margin="dense"
      fullWidth
      size="small"
      color="secondary"
      type="text"
      label="Enter your OTP"
      autoComplete="otp"
    />

    <div className={Styles.text_secondary_b}>
      One time Passcode sent to your email ID- abc@gmail.com
    </div>

    <div
      className={Styles.button}
      style={{ borderRadius: 25 }}
      onClick={() => {
        handleClose();
        setCurrentView("one");
        toggleAuthMsgComponent(true);
      }}
    >
      Enter
    </div>
  </>
);

export default Signup;
