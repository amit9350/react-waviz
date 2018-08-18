import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Expertise from './components/Expertise';
import Navbar from './components/CustomNavbar';
import Foter from './components/Foter';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/expertise" component={Expertise} />

          <Foter />
        </div>
      </Router>
    );
  }
}

export default App;
