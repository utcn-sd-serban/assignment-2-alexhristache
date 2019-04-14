class QuestionListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        window.location.assign("#/question-details/" + index);
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;