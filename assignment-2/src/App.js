import React, { Component } from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartQuestionList from './view/SmartQuestionList';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartQuestionDetails from './view/SmartQuestionDetails';
import SmartQuestionListByTag from './view/SmartQuestionListByTag';
import SmartQuestionListByText from './view/SmartQuestionListByText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact={true} component={SmartQuestionList} path="/" />
            <Route exact={true} component={SmartCreateQuestion} path="/create-question" />
            <Route exact={true} component={SmartQuestionDetails} path="/question-details/:index" />
            <Route exact={true} component={SmartQuestionListByTag} path="/tag/:filter" />
            <Route exact={true} component={SmartQuestionListByText} path="/text/:filter" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
