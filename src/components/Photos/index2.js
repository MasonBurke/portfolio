import React, { Route } from "react"
import Proj1 from "./Proj1.png"
import Weather from "./Weather.png"
import Todo from "./Todo.png"

const styles =  {
img:{
    height: 255,
    width: 255,
    
},
h5:{
   marginLeft: 48
},
h6:{
    marginLeft: 48

},
card:{
    margin:15,


}
};


function Proj() {
    return(
<>
<div className="card" style={styles.card}>
<img style={styles.img} src={Proj1}/>
<h5 style={styles.h5}>The Ultimate IQ Test</h5>
<h6 style={styles.h6}>Code</h6>
{/* <Route exact path="/" render={() => (window.location = "https://github.com/MasonBurke/proj2")}/> */}
</div>

<div className="card" style={styles.card}>
<img style={styles.img} src={Weather}/>
<h5 style={styles.h5}>Weather App</h5>
<h6 style={styles.h6}>Code</h6>
{/* <Route exact path="/" render={() => (window.location = "https://github.com/MasonBurke/proj2")}/> */}
</div>

<div className="card" style={styles.card}>
<img style={styles.img} src={Todo}/>
<h5 style={styles.h5}>Git 'er Done! (To do list) </h5>
<h6 style={styles.h6}>Code</h6>
{/* <Route exact path="/" render={() => (window.location = "https://github.com/MasonBurke/proj2")}/> */}
</div>


</>

    )
}

export default Proj