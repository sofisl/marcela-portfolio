import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component() {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component {Home} />
            <Route path="/about" component {About} />
            <Route path="/illustrations" component {Illustrations} />
            <Route path="/curriculum-designs" component {CurriculumDesigns} />
            <Route path="/other-ideas" component {OtherIdeas} />
            <Route path="/contact" component {Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
