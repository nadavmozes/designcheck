import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import './assets/style/main.scss';
// import { Nav } from './cmps/Nav';

function App() {
  return (
    <main className="app">
        <Router>
          <Switch>
            <Route exact component={Home} path={'/'}  />
          </Switch>
        </Router>
    </main>
  );
}

export default App;
