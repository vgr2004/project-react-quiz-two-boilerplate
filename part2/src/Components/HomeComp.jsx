import React, { Component } from 'react'
import "../App.css"

class HomeComp extends Component {
  render() {
    return (
        <body className ="home">        
      <div className ="homecomp">
        <h1 id='homeHeading'>Quiz App</h1>
        <button id="play" >Play</button>
      </div>
      </body>
    )
  }
}

export default HomeComp