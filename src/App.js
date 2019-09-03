import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Hangman from "./Hangman";

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
      <div className="App">
        <ul>
          <Hangman />
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      </HashRouter>
    );
  }
}

const Home = () => < div > < h2 > < /h2></div >
const About = () => < div > < h2 > < /h2></div >


export default App;
