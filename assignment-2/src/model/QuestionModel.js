import { EventEmitter } from "events";

class QuestionModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                questionId: 1,
                user: "Alex",
                title: "What does Linus Torvalds mean when he says that Git never ever tracks a file?",
                text: "Yet, when you dive into the Git book, the first thing you are told is that a file in Git can be either tracked or untracked. Furthermore, it seems to me like the whole Git experience is geared towards file versioning. When using git diff or git status output is presented on a per file basis. When using git add you also get to choose on a per file basis. You can even review history on a file basis and is lightning fast. How should this statement be interpreted?",
                creationDateTime: "2018-09-18 16:39:22",
                score: 0,
                // answers: [{
                //     answerId: 1,
                //     questionId: 1,
                //     user: "Andrei",
                //     text: "My first answer to Q1",
                //     creationDateTime: "2018-09-18T16:39:22"
                // }, {
                //     answerId: 2,
                //     questionId: 1,
                //     user: "Andrei",
                //     text: "My second answer to  Q1",
                //     creationDateTime: "2018-09-18T16:39:22"
                // }]
            }, {
                questionId: 2,
                user: "Andrei",
                title: "What does Lambda Calculus mean?",
                text: "Furthermore, it seems to me like the whole Git experience is geared towards file versioning. When using git diff or git status output is presented on a per file basis. When using git add you also get to choose on a per file basis. You can even review history on a file basis and is lightning fast. How should this statement be interpreted?",
                creationDateTime: "2018-02-18 16:39:22",
                score: 0,
            }],
            newQuestion: {
                questionId: -1,
                user: "-",
                title: "-",
                text: "-",
                creationDateTime: "-",
                score: -1,
            }
        };
    }

    addQuestion(questionId, user, title, text, creationDateTime, score) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                questionId,
                user,
                title,
                text,
                creationDateTime,
                score,
            }])
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        }
        this.emit("change", this.state);
    }
}

const questionModel = new QuestionModel();

export default questionModel;