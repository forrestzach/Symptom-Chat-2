import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Pages/Home';
import SymptomChecker from './Pages/SymptomChecker'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
  }
  this.addImage = this.addImage.bind(this)
  }
  addImage(image) {
    this.setState({images: [...this.state.images, image]})
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Route exact path='/' component={(routeProps) => (<Home />)} />
          <Route exact path='/SymptomChecker' component={(routeProps) => (<SymptomChecker />)} />
          <Route exact path='/Dashboard' component={(routeProps) => (<Dashboard />)} />
          <Route exact path='/About' component={(routeProps) => (<About />)} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;