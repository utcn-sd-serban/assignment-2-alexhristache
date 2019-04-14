import React, { Component } from "react";
import questionModel from "../model/QuestionModel";
import QuestionDetails from "./QuestionDetails";

const mapModelStateToComponentState = (modelState, props) => (
    modelState.questions[props.match.params.index]
)

export default class SmartQuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(questionModel.state, props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        questionModel.addListener("change", this.listener);
        debugger;
    }

    componentDidUpdate(prev) {
        if (prev.match.params.index !== this.props.match.params.index) {
            this.setState(mapModelStateToComponentState(questionModel.state, this.props));
        }
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionDetails
                user={this.state.user}
                title={this.state.title}
                text={this.state.text}
                creationDateTime={this.state.creationDateTime}
                score={this.state.score}
            />
        );
    }
}