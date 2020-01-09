import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Projects from './components/Projects';
import Academic from './components/Academic'; 

export default () => (
    <Switch>
      <Route exact path="/" component={Academic} />
      <Route path="/projetos" component={Projects} />
    </Switch>
)