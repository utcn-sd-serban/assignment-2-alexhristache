import answerModel from "../model/AnswerModel";

class AnswerPresenter {

    onChange(id, property, value) {
        answerModel.changeAnswerProperty(id, property, value);
    }

    onRemove(id) {
        answerModel.removeAnswer(id);
    }
}

const answerPresenter = new AnswerPresenter();

export default answerPresenter;