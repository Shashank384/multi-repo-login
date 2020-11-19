import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./root.component.css";
import LoginPage from "./Components/LoginPage";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "./Components/logo.png";

import * as singleSpa from "single-spa";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "3.5em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    fontWeight: "400",
    fontSize: "1.1rem",
    minWidth: 10,
    marginLeft: "75px",
  },
}));

export default function Root() {
  const classes = useStyles();
  const [flag, setFlag] = useState(false);
  const [loginFlag, setLoginFlag] = useState(true);

  const flagHandler = (boolValue) => {
    setFlag(boolValue);
  };

  const loginDisplayHandler = (boolValue) => {
    setLoginFlag(boolValue);
    singleSpa.navigateToUrl("/admin");
  };

  const tabs = (
    <React.Fragment>
      <Tabs>
        <Tab
          className={classes.tab}
          label="Admin"
          component={Link}
          to="/admin"
        />
        <Tab
          className={classes.tab}
          label="Connections"
          component={Link}
          to="/connections"
        />
        <Tab
          className={classes.tab}
          label="Extracts"
          component={Link}
          to="/cextracts"
        />
        <Tab
          className={classes.tab}
          label="Frauds"
          component={Link}
          to="/frauds"
        />
        <Tab
          className={classes.tab}
          label="Clients"
          component={Link}
          to="/clients"
        />
        <Tab
          className={classes.tab}
          label="Approvals"
          component={Link}
          to="/approvals"
        />
      </Tabs>
    </React.Fragment>
  );
  const login = (
    <LoginPage
      flagHandler={flagHandler}
      loginDisplayHandler={loginDisplayHandler}
    />
  );

  return (
    <BrowserRouter>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img className={classes.logo} alt="company logo" src={logo} />
            </Button>
            {flag ? tabs : ""}
          </Toolbar>
        </AppBar>
      </div>
      {loginFlag && login}
    </BrowserRouter>
  );
}
