import React, { Component } from "react";
import questionModel from "../model/QuestionModel";
import answerModel from "../model/AnswerModel";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import answerPresenter from "../presenter/AnswerPresenter";

const mapModelStateToComponentState = (questionModelState, answerModelState, props) => ({
    question: questionModelState.questions.find((question) => question.questionId == props.match.params.index),
    answers: answerModelState.answers.filter((answer) => answer.questionId == props.match.params.index)
})

export default class SmartQuestionDetails extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = mapModelStateToComponentState(questionModel.state, answerModel.state, props);
        this.listener = (questionModelState, answermodelState) => this.setState(mapModelStateToComponentState(questionModelState, answermodelState, this.props));
        questionModel.addListener("change", this.listener);
        answerModel.addListener("change", this.listener);
    }

    componentDidUpdate(prev) {
        if (prev.match.params.index !== this.props.match.params.index) {
            this.setState(mapModelStateToComponentState(questionModel.state, answerModel.state, this.props));
        }
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
        answerModel.removeListener("change", this.listener);
    }

    render() {
        debugger;
        return (
            <div>
                <QuestionDetails
                    user={this.state.question.user}
                    title={this.state.question.title}
                    text={this.state.question.text}
                    creationDateTime={this.state.question.creationDateTime}
                    score={this.state.question.score}
                />
                <AnswerList
                    answers={this.state.answers}
                    onRemove={answerPresenter.onRemove}
                />
            </div>
        );
    }
}