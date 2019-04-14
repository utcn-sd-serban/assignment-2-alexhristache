import React, { Component } from "react";
import questionModel from "../model/QuestionModel";
import QuestionList from "./QuestionList";
import questionListPresenter from "../presenter/QuestionListPresenter";

const mapModelStateToComponentState = modelState => ({
    questions: modelState.questions,
    title: modelState.newQuestion.title,
    text: modelState.newQuestion.text
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
        return (
            <QuestionList
                onCreate={questionListPresenter.onCreate}
                onChange={questionListPresenter.onChange}
                title={this.state.title}
                text={this.state.text}
                questions={this.state.questions}
            />
        );
    }
}