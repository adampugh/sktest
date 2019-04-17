import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './components/Search/Search';
import Event from './components/Event/Event';
import Artist from './components/Artist/Artist';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Search} />
        <Route exact path="/event/:id" component={Event} />
        <Route exact path="/artist/:id" component={Artist} />
      </Router>
    );
  }
}

export default App;
