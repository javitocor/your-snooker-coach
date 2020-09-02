import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../containers/Landing';
import ProfileCoach from '../containers/ProfileCoach';
import ProfileUser from '../containers/ProfileUser';


const App = () => (
  <Router>
    <Switch>
      <>
        <div className="app">
          <Route exact path="/" component={Landing} />
          <Route path="/coach/:id" exact component={ProfileCoach} />
          <Route exact path="/user/trainings" component={ProfileUser} />
        </div>
      </>
    </Switch>
  </Router>
);

export default App;
