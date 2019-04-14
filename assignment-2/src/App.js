import React, { Component } from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartQuestionList from './view/SmartQuestionList';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartQuestionDetails from './view/SmartQuestionDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact={true} component={SmartQuestionList} path="/" />
            <Route exact={true} component={SmartCreateQuestion} path="/create-question" />
            <Route exact={true} component={SmartQuestionDetails} path="/question-details/:index" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
