import { Component } from "react";
import HomeComp from "./components/HomeComp"
 import QuizComp from "./components/QuizComp"
 import ResultComp from "./components/ResultComp"

export default class App extends Component{
  render(){
    return(
      <div>

        <QuizComp/> 
  
      </div>
    );
  }
}