import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Projects from './components/Projects';
import Academic from './components/Academic'; 
import About from './components/About';
export default () => (
    <Switch>
      <Route exact path="/" component={Academic} />
      <Route path="/projetos" component={Projects} />
      <Route path="/about" component={About} />
    </Switch>
)