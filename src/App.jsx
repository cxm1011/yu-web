import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRouter from './utils/AuthRouter'

import {BasicLayout, Home, EnterBrand, JoinUs, FoodDisplay, NewsDisplay, MessageBoard, Login} from 'page';

const App = () => (
  <Router>
    <Switch>
      <BasicLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/food-display' component={FoodDisplay} />
        <Route exact path='/enter-brand' component={EnterBrand} />
        <Route exact path='/join-us' component={JoinUs} />
        <Route exact path='/news-display' component={NewsDisplay} />
        <Route path='/login' component={Login} />
        {/* 登录权限控制组件 */}
        <AuthRouter path='/message-board' component={MessageBoard} />
      </BasicLayout>
    </Switch>
  </Router>
  )

export default App;
