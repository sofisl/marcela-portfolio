import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home'
import { About} from './About'
import { CurriculumDesigns } from './CurriculumDesigns'
import { OtherIdeas } from './OtherIdeas'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import {NavigationBar} from './components/NavigationBar';
import { Desert } from './desert.js'
import { Forest } from './forest'
import { Galaxy } from './galaxy'
import { HotSprings } from './hotsprings'
import { Lake } from './lake'
import { MilkyWay } from './milkyway'
import { Tornado } from './tornado'
import { SnowyMountains } from './snowymountains'
import { Mountains } from './mountains'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
         <Router>
          <Switch>
            <Route exact path="/" component={Home} />      
            <Route path="/about" component={About} />
            <Route path="/curriculumdesigns" component={CurriculumDesigns} />
            <Route path="/other-ideas" component={OtherIdeas} />
            <Route path="/contact" component={Contact} />
            <Route path="/desert" component={Desert} />
            <Route path="/forest" component={Forest} />
            <Route path="/galaxy" component={Galaxy} />
            <Route path="/hotsprings" component={HotSprings} />
            <Route path="/lake" component={Lake} />
            <Route path="/milkyway" component={MilkyWay} />
            <Route path="/tornado" component={Tornado} />
            <Route path="/snowymountains" component={SnowyMountains} />
            <Route path="/mountains" component={Mountains} />
            <Route component={NoMatch} />
          </Switch>
         </Router>
      </React.Fragment>
    );
  }
}

export default App;
