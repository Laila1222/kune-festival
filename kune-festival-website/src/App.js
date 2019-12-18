import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Program from './components/Pages/Program';
import Tickets from './components/Pages/Tickets';
import Practical from './components/Pages/Practical';
import Contact from './components/Pages/Contact';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/program">
          <Program />
        </Route>
        <Route exact path="/tickets">
          <Tickets />
        </Route>
        <Route exact path="/practical">
          <Practical />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
