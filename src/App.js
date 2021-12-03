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
  Day2Page
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
      </Switch>
    </Router>
  );
}

export default App;
