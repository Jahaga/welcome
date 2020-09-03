import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../jeopardyDisplay/JeopardyDisplay";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
      score: 0,
      guess: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  }

  inputValue = (event) => {
    const guess = event.target.value;
    this.setState({ guess });
  };

  yourAnswer = (event) => {
    this.setState((state) => {
      let score = state.score;
      if (state.guess === state.data.value) {
        score += state.data.value;
      } else {
        score -= state.data.value;
      }
      return { score, guess: "" };
    });
    this.getNewQuestion();
  };

  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen
  render() {
    if (this.state.data.category === undefined) {
      return "Loading...";
    }

    return (
      <div>
        <JeopardyDisplay
          category={this.state.data.category.title}
          score={this.state.score}
          question={this.state.data.question}
          value={this.state.data.value}
          guess={this.state.guess}
          yourAnswer={this.yourAnswer}
          inputValue={this.inputValue}
        />
      </div>
    );
  }
}
export default Jeopardy;
