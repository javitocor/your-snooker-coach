import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../containers/Landing';
import ProfileCoach from '../containers/ProfileCoach';
import ProfileUser from '../containers/ProfileUser';
import About from './About';
import NavBar from './NavBar';


const App = () => (
  <Router>
    <Switch>
      <>
        <div className=" p-3">
          <div className="row d-sm-flex flex-sm-column d-md-flex flex-md-row">
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/coach/:id" component={ProfileCoach} />
            <Route exact path="/user/trainings" component={ProfileUser} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </>
    </Switch>
  </Router>
);

export default App;

