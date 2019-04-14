import questionModel from "../model/QuestionModel"

class CreateQuestionPresenter {

    onCreate() {
        questionModel.addQuestion(0, "Alex", questionModel.state.newQuestion.title, questionModel.state.newQuestion.text, "Today", questionModel.state.newQuestion.tags, 0);
        questionModel.changeNewQuestionProperty("questionId", NaN);
        questionModel.changeNewQuestionProperty("user", "");
        questionModel.changeNewQuestionProperty("title", "");
        questionModel.changeNewQuestionProperty("text", "");
        questionModel.changeNewQuestionProperty("creationDateTime", "");
        questionModel.changeNewQuestionProperty("tags", "");
        questionModel.changeNewQuestionProperty("score", NaN);
        window.location.assign("#/");
    }

    onChange(property, value) {
        questionModel.changeNewQuestionProperty(property, value);
    }

}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;