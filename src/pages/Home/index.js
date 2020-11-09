import React from "react";
import AppBar from "./components/AppBar";
import Header from "./components/Header";

import Signup from "./components/Signup";
import Login from "./components/Login";
import AuthMessage from "./components/AuthMessage";

const Home = () => {
  // Signup Component state
  const [signupOpen, setSignupOpen] = React.useState(false);

  // Login Component state
  const [loginOpen, setLoginOpen] = React.useState(false);

  // AuthMsg Component state
  const [authMsgOpen, setAuthMsgOpen] = React.useState(false);

  // Toogle Signup Component
  const toggleSignupComponent = open => {
    setSignupOpen(open);
  };

  // Toogle Login Component
  const toggleLoginComponent = (event, open) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLoginOpen(open);
  };

  // Toogle Signup Component
  const toggleAuthMsgComponent = open => {
    setAuthMsgOpen(open);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <AppBar
        toggleSignupComponent={toggleSignupComponent}
        toggleLoginComponent={toggleLoginComponent}
      />
      <Header
        toggleSignupComponent={toggleSignupComponent}
        toggleLoginComponent={toggleLoginComponent}
      />

      <Signup
        open={signupOpen}
        handleClose={() => toggleSignupComponent(false)}
        toggleAuthMsgComponent={toggleAuthMsgComponent}
      />
      <Login
        open={loginOpen}
        toggleLoginComponent={toggleLoginComponent}
        toggleAuthMsgComponent={toggleAuthMsgComponent}
      />

      <AuthMessage
        open={authMsgOpen}
        toggleAuthMsgComponent={toggleAuthMsgComponent}
      />
    </div>
  );
};

export default Home;
