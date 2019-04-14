import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionList from './view/QuestionList';
import SmartQuestionList from './view/SmartQuestionList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmartQuestionList />
      </div>
    );
  }
}

export default App;
