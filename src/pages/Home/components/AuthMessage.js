import React from "react";
import PropTypes from "prop-types";

// Import Components form Material UI
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// Import css style module
import Styles from "../css/Signup.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AuthMessage = props => {
  const { open, toggleAuthMsgComponent } = props;

  return (
    <Dialog
      onClose={() => toggleAuthMsgComponent(false)}
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
      <div className={Styles.root_auth_message}>
        <CheckCircleIcon
          style={{ color: "#7ecb20", fontSize: "103px" }}
          fontSize="large"
        />
        <b>Thanks. Successful!</b>
      </div>
    </Dialog>
  );
};

AuthMessage.propTypes = {
  toggleAuthMsgComponent: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AuthMessage;
