import answerModel from "../model/AnswerModel";

class AnswerPresenter {

    onChange(id, property, value) {
        answerModel.changeAnswerProperty(id, property, value);
    }

    onRemove(id) {
        answerModel.removeAnswer(id);
    }

    onCreateAnswer(id) {
        answerModel.changeNewAnswerProperty("questionId", id);
        window.location.assign("#/create-answer");
    }
}

const answerPresenter = new AnswerPresenter();

export default answerPresenter;