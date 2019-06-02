import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {BasicLayout, BrandingDispaly, FoodDisplay, Home} from 'page';

const App = () => (
  <Router>
    <Switch>
      <BasicLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/branding-display' component={BrandingDispaly} />
        <Route exact path='/food-display' component={FoodDisplay} />
      </BasicLayout>
    </Switch>
  </Router>)

export default App;
