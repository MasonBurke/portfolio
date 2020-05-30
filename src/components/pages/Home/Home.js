import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
import ProfilePhoto from '../../Photos/index.js';
import Bio from "../../Bio.js"

function Home() {
  return (
<Router>
<ProfilePhoto/>
<Bio/>

</Router>
  );
}
// this.props.router.push("/")
export default Home;
