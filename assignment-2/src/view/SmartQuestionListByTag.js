import React, { Component } from "react";
import questionModel from "../model/QuestionModel";
import QuestionList from "./QuestionList";
import questionListPresenter from "../presenter/QuestionListPresenter";

const mapModelStateToComponentState = (modelState, props) => ({
    questions: modelState.questions,
    filter: props.match.params.filter
});

function filterByTag(questions, tag) {
    debugger;
    let newQuestions = []
        for (let question of questions) {
            if (question.tags.includes(tag)) {
                newQuestions.push(question);
            }
        }
    return newQuestions;
}

export default class SmartQuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(questionModel.state, props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        questionModel.addListener("change", this.listener);
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        debugger;
        return (
            <QuestionList
                questions={filterByTag(this.state.questions, this.state.filter)}
                onCreateQuestion={questionListPresenter.onCreateQuestion}
                onViewDetails={questionListPresenter.onViewDetails}
                onChange={questionListPresenter.onChange}
                filter={this.state.filter}
            />
        );
    }
}