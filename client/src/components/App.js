import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => (
  <Router>
    <Switch>
      <>
        <div className="">
          <Route exact path="/" component={Landing} />
          <Route path="/coach/:id" exact component={ProfileCoach} />
          <Route exact path="/trainings" component={ProfileUser} />
        </div>
      </>
    </Switch>
  </Router>
);

export default App;
