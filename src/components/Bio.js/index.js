import React from "react"
import { LoremIpsum } from 'react-lorem-ipsum';

function Bio() {
    return(
<p> {LoremIpsum({p: 5})}  
</p>
    )
}

export default Bio