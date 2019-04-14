import questionModel from "../model/QuestionModel"

class QuestionListPresenter {

    onCreate() {
        questionModel.addQuestion(0, "Alex", questionModel.state.newQuestion.title, questionModel.state.newQuestion.text, "Today", 0);
        questionModel.changeNewQuestionProperty("questionId", NaN);
        questionModel.changeNewQuestionProperty("user", "");
        questionModel.changeNewQuestionProperty("title", "");
        questionModel.changeNewQuestionProperty("text", "");
        questionModel.changeNewQuestionProperty("creationDateTime", "");
        questionModel.changeNewQuestionProperty("score", NaN);
    }

    onChange(property, value) {
        questionModel.changeNewQuestionProperty(property, value);
    }

}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;