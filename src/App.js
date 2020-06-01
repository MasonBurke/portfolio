import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Home from "./components/pages/Home/Home"
import Projects from './components/pages/Projects';
import Contact from "./components/pages/Contact"

function App() {
  return (
<Wrapper> 
<Router>
 
 <Navbar />
<Route  exact path="/portfolio" component={Home} />
<Route exact path="/projects" component={Projects} />
<Route exact path="/contact" component={Contact} />



</Router>
</Wrapper>
  );
}

export default App;
