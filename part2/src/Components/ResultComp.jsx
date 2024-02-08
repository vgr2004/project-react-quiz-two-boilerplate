import React, { Component } from 'react'
import '../App.css';

class ResultComp extends Component {
  render() {
    return (
      <div className='result'>
        <h2>Result</h2>
        <div className='box'>
          <h1>Your Score is 20%</h1>
          <table className='result-table'>
            <tr>
              <td className='resultParts'>Total number of Questions</td>
              <td>15</td>
            </tr>
            <tr>
              <td className='resultParts'>Number of Attempted Questions</td>
              <td>3</td>
            </tr>
            <tr>
              <td className='resultParts'>Number of Correct Answers</td>
              <td>3</td>
            </tr>
            <tr>
              <td className='resultParts'>Number of Wrong Answers</td>
              <td>6</td>
            </tr>
          </table>
        </div>
        <div className='output'>
          <button className='output1'>Play Again</button>
          <button className='output2'>Back to Home</button>
        </div>
      </div>
    )
  }
}

export default ResultComp;