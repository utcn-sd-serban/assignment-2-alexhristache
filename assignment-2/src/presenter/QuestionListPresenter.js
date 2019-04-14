import questionModel from "../model/QuestionModel";

class QuestionListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        window.location.assign("#/question-details/" + index);
    }

    onFilterByTag(filter) {
        window.location.assign("#/tag/" + filter);
    }

    onFilterByText(filter) { 
        window.location.assign("#/title/" + filter);
    }

    onChange(property, value) {
        questionModel.changeStateProperty(property, value);
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;