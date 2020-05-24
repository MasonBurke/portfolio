import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "../src/components/Navbar"
import ProfilePhoto from './components/ProfilePhoto.js';
import Bio from "./components/Bio.js"


function App() {
  return (
<Router>
  <div>
<Navbar />
  </div>
<ProfilePhoto/>
<Bio/>
</Router>
  );
}

export default App;
