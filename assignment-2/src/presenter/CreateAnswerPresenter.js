import answerModel from "../model/AnswerModel";
import userModel from "../model/UserModel";

class CreateAnswerPresenter {

    onCreate() {
        debugger;
        answerModel.addAnswer(12, answerModel.state.newAnswer.questionId, userModel.state.loggedUser, answerModel.state.newAnswer.text, "Today", 0);
        window.location.assign("#/question-details/" + answerModel.state.newAnswer.questionId);
        answerModel.changeNewAnswerProperty("answerId", 0);
        answerModel.changeNewAnswerProperty("questionId", 0);
        answerModel.changeNewAnswerProperty("user", "");
        answerModel.changeNewAnswerProperty("text", "");
        answerModel.changeNewAnswerProperty("score", 0);
    }

    onChange(property, value) {
        debugger;
        answerModel.changeNewAnswerProperty(property, value);
    }

}

const createAnswerPresenter = new CreateAnswerPresenter();

export default createAnswerPresenter;