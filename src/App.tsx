import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Musician from './pages/Musician/Musician';
import MainNavigation from "./components/MainNavigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <MainNavigation/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/musicians:id">
          <Musician/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
