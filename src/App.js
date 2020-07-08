import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home'
import { About} from './About'
import { Illustrations } from './Illustrations'
import { CurriculumDesigns } from './CurriculumDesigns'
import { OtherIdeas } from './OtherIdeas'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import {NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
         <Router>
          <Switch>
            <Route exact path="/" component={Home} />      
            <Route path="/about" component={About} />
            <Route path="/illustrations" component={Illustrations} />
            <Route path="/curriculum-designs" component={CurriculumDesigns} />
            <Route path="/other-ideas" component={OtherIdeas} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
         </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
