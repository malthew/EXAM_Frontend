import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Loginout from "./Components/Login-out";
import Home from "./Components/Home";
import NoMatch from "./Components/NoMatch";
import Esports from "./Components/Esports";
import Teams from "./Components/Teams";

import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";

function Header({isLoggedIn, loginMsg}) {
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/esports">Esports</NavLink></li>
        <li><NavLink activeClassName="active" to="/teams">Teams</NavLink></li>

        {/* {isLoggedIn && (
          <React.Fragment>
            <li><NavLink activeClassName="selected" to="/controlpanel">Control Panel</NavLink></li>
          </React.Fragment>
        )} */}
        <li><NavLink activeClassName="active" to="/login-out">{loginMsg}</NavLink></li>
      </ul>
    </div>
  );
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const setLoginStatus = status => {
    setIsLoggedIn(status);
    history.push("/");
  };

  return (
    <Router>
    <div>
      <Header 
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
      />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/esports">
            <Esports />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          {/* <Route path="/controlpanel">
            <ControlPanel isLoggedIn={isLoggedIn}/>
          </Route> */}
          <Route path="/login-out">
            <Loginout 
              loginMsg={isLoggedIn ? "Logout" : "Login"}
              isLoggedIn={isLoggedIn}
              setLoginStatus={setLoginStatus}
            />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>  
    </div>
    </Router>
  );
}

export default App;
