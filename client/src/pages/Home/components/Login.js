import React from "react";
import PropTypes from "prop-types";

// Import css style module
import Styles from "../css/Login.module.css";

// Import Components from Material UI
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";

const Login = props => {
  const { open, toggleLoginComponent, toggleAuthMsgComponent } = props;

  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={e => toggleLoginComponent(e, false)}
    >
      <div className={Styles.root}>
        <div className={Styles.title}>
          <span>
            <b>Login</b>
          </span>
          <IconButton onClick={e => toggleLoginComponent(e, false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={Styles.form}>
          <h3>Student</h3>
          <TextField
            color="secondary"
            variant="outlined"
            margin="dense"
            fullWidth
            size="small"
            label="Email"
            autoComplete="email"
          />

          <TextField
            color="secondary"
            variant="outlined"
            margin="dense"
            fullWidth
            size="small"
            label="Password"
            autoComplete="password"
          />
          <h5>Forgot Password?</h5>
          <div
            className={Styles.button}
            onClick={e => {
              toggleLoginComponent(e, false);
              toggleAuthMsgComponent(true);
            }}
          >
            Login
          </div>
          <h4>New to MyWays? Sign Up Here</h4>
        </div>
      </div>
    </Drawer>
  );
};

Login.propTypes = {
  toggleLoginComponent: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Login;
