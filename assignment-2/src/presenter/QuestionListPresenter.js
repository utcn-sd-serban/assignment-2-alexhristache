import questionModel from "../model/QuestionModel";
import answerModel from "../model/AnswerModel";

class QuestionListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        answerModel.findAnswersForQuestion(index);
        window.location.assign("#/question-details/" + index);
    }

    onFilterByTag(filter) {
        questionModel.filterByTag(filter);
        window.location.assign("#/tag/");
    }

    onFilterByText(filter) {
        questionModel.filterByText(filter);
        window.location.assign("#/title/");
    }

    onChange(property, value) {
        questionModel.changeStateProperty(property, value);
    }

    onUpvote(questionId) {
        questionModel.vote(questionId, 1);
    }

    onDownvote(questionId) {
        questionModel.vote(questionId, -1);
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;