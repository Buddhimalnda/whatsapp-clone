import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./login.scss";
import { useStateValue } from "./stateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, setState] = useState({ name: "", password: "" });
  const [{}, dispatch] = useStateValue();
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      fetch("/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          // console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
          setData(myJson.user);
          setIsLoad(true);
        });
    } catch (e) {
      e.preventDefault();
    }
  };
  const signIn = () => {
    // console.log(state);
    data.map((d) => {
      if (d.name == state.name && d.password == state.password) {
        dispatch({ type: actionTypes.SET_USER, user: state });
      }
    });
  };
  if (isLoad)
    return (
      <Paper>
        <div className="login">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1>Login For WhatsApp Clone</h1>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Username"
                className="input"
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="passd"
                type="password"
                className="input"
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
                label="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="btn"
                variant="contained"
                color="primary"
                onClick={signIn}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    );
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}

export default Login;
