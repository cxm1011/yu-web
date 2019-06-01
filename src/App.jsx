import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {BasicLayout, PersonalCenter, Home, EnterBrand, JoinUs} from 'page';

const App = () => (
  <Router>
    <Switch>
      <BasicLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/personal-center' component={PersonalCenter} />
        <Route exact path='/enter-brand' component={EnterBrand} />
        <Route exact path='/join-us' component={JoinUs} />
      </BasicLayout>
    </Switch>
  </Router>)

export default App;
