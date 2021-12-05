import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { 
  HomePage,
  Day1Page,
  Day2Page,
  Day3Page,
  Day4Page,
  Day5Page,
} from './pages';

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/1/:taskNumber">
          <Day1Page />
        </Route>
        <Route exact path="/2/:taskNumber">
          <Day2Page />
        </Route>
        <Route exact path="/3/:taskNumber">
          <Day3Page />
        </Route>
        <Route exact path="/4/:taskNumber">
          <Day4Page />
        </Route>
        <Route exact path="/5/:taskNumber">
          <Day5Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
