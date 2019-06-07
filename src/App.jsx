import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import {BasicLayout, PersonalCenter, Home, EnterBrand, JoinUs, FoodDisplay, BrandingDispaly, NewsDisplay, MessageBoard} from 'page';

const App = () => (
  <Router>
    <Switch>
      <BasicLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/branding-display' component={BrandingDispaly} />
        <Route exact path='/food-display' component={FoodDisplay} />
        <Route exact path='/personal-center' component={PersonalCenter} />
        <Route exact path='/enter-brand' component={EnterBrand} />
        <Route exact path='/join-us' component={JoinUs} />
        <Route exact path='/news-display' component={NewsDisplay} />
        <Route exact path='/message-board' component={MessageBoard} />
      </BasicLayout>
    </Switch>
  </Router>
  )

export default App;
