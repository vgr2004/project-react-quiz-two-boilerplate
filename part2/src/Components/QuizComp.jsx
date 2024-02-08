import React, { Component } from "react";
import '../App.css'
import questions from "./Questions.json";

export default class QuizComp extends Component{
  constructor(props){
    super(props);
    this.state={
      questions:questions,
      currQuestion:{},
      nextQuestion:{},
      prevQuestion:{},
      currQuestionIndex:0,

    }
  }

  componentDidMount(){
    this.displayQuestion(this.state.questions, this.state.currQuestion, this.state.nextQuestion, this.state.prevQuestion);
  }

  displayQuestion = (questions=this.state.questions, currQuestion, nextQuestion, prevQuestion)=>{
    let {currQuestionIndex} = this.state;
    if(this.state.questions.length!==0){
      questions = this.state.questions;
      currQuestion = questions[currQuestionIndex];
      nextQuestion = questions[currQuestionIndex+1];
      prevQuestion = questions[currQuestionIndex-1];

      this.setState({
        currQuestion,
        nextQuestion,
        prevQuestion,
      })

    }
  }

  handleNextButtonClick = ()=>{
    if(this.state.nextQuestion!==undefined){
      this.setState(prevState=>({
        currQuestionIndex:prevState.currQuestionIndex+1
      }),()=>{
        this.displayQuestion(this.state.state, this.state.currQuestion, this.state.nextQuestion, this.state.prevQuestion)
      })
    }
  }

  handlePrevButtonClick = ()=>{
    if(this.state.prevQuestion!==undefined){
      this.setState(prevState=>({
        currQuestionIndex:prevState.currQuestionIndex-1
      }),()=>{
        this.displayQuestion(this.state.state, this.state.currQuestion, this.state.nextQuestion, this.state.prevQuestion)
      })
    }
  }

  handleQuitButtonClick = ()=>{
    
    if(window.confirm("Are you sure you want to quit?")){
      window.location.reload(false)
    }
  }

  render(){
    const {currQuestion} = this.state;

    return(
      <div className="question">
        <h2>Question</h2>

        <div>
          <span>1 of 15</span>
          <h5>{currQuestion.question}</h5>
        </div>

        <div className="option-container">
          <p className="option">{currQuestion.optionA}</p>
          <p className="option">{currQuestion.optionB}</p>
        </div>

        <div className="option-container">
          <p className="option">{currQuestion.optionC}</p>
          <p className="option">{currQuestion.optionD}</p>
        </div>

        <div className="button-container">
          <button className="button previous" onClick={this.handlePrevButtonClick}>Previous</button>
          <button className="button next" onClick={this.handleNextButtonClick}>Next</button>
          <button className="button quit" onClick={this.handleQuitButtonClick}>Quit</button>
        </div>


        
      </div>
    )
  }
}