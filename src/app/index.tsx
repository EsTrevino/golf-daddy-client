import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/header';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <>landing</>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
