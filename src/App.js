import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Chat from "./Chat";
import Login from "./Login";
import Open from "./Open";
import Sidebar from "./Sidebar";
import { useStateValue } from "./stateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <div className="app__body__login">
          <Login />
        </div>
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Open />
              </Route>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
