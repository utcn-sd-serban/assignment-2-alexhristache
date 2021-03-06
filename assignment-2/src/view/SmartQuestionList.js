import React, { Component } from "react";
import questionModel from "../model/QuestionModel";
import QuestionList from "./QuestionList";
import questionListPresenter from "../presenter/QuestionListPresenter";

const mapModelStateToComponentState = modelState => ({
    questions: modelState.questions
});

export default class SmartQuestionList extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(questionModel.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        questionModel.addListener("change", this.listener);
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        debugger;
        return (
            <QuestionList
                questions={this.state.questions}
                onCreateQuestion={questionListPresenter.onCreateQuestion}
                onViewDetails={questionListPresenter.onViewDetails}
            />
        );
    }
}