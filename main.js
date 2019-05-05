'use strict';
// 1. Create data to work with
// 2. Render start screen with content
// a. Check the screen
// 3. Wnen user clicks start button, show question 1
// 4. When user selects answer, enable submit
// 5. User clicks submit, show next question
// 6. After last question, show results screen

const questions = [
    {//questions[0]
        id: 'question_1'
        text: 'Question 1',
        type: 'radio',
        answers: [
            {//questions[0].answers[0]
                id: 'answer1-1',
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[0].answers[1]
                id: 'answer2-1',
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[0].answers[2]
                id: 'answer3-1',
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    },
    {//questions[1]
        id: 'question_2'
        text: 'Question 2',
        type: 'radio',
        answers: [
            {//questions[1].answers[0]
                id: 'answer1-2',
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[1].answers[1]
                id: 'answer2-2',
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[1].answers[2]
                id: 'answer3-2',
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    },
    {//questions[2]
        text: 'Question 3',
        type: 'checkbox',
        answers: [
            {//questions[2].answers[0]
                id: 'answer1-3',
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[2].answers[1]
                id: 'answer2-3',
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[2].answers[2]
                id: 'answer3-3',
                text: 'Answer 3',
                value: 'C',
                correct: false
            },
            {//questions[2].answers[3]
                id: 'answer4-3',
                text: 'Answer 4',
                value: 'A',
                correct: false
            },
            {//questions[2].answers[4]
                id: 'answer5-3',
                text: 'Answer 5',
                value: 'B',
                correct: false
            },
            {//questions[2].answers[5]
                id: 'answer6-3',
                text: 'Answer 6',
                value: 'C',
                correct: false
            }
        ]
    },
    {//questions[3]
        text: 'Question 4',
        type: 'checkbox',
        answers: [
            {//questions[3].answers[0]
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[3].answers[1]
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[3].answers[2]
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    },
    {//questions[4]
        text: 'Question 5',
        type: 'checkbox',
        answers: [
            {//questions[4].answers[0]
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[4].answers[1]
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[4].answers[2]
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    },
    {//questions[5]
        text: 'Question 6',
        type: 'radio',
        answers: [
            {//questions[5].answers[0]
                id: 'answer1-1'
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[5].answers[1]
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[5].answers[2]
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    }
];
const container = $('section.live');
const counter = 0;

function beginQuiz() {
    //On click
    //Remove .current from .landing
    //Add class .current to .question
    container.on('click', '.landing > button', event => {
        $('.landing.current').removeClass('current');
        $('.question').addClass('current');
        renderQuestion();
    });

}
//Need to generate html that gets displayed in DOM
function generateRadioQ(question) {
    return `<form id="${question.id}">
    <h2>${question.text}</h2>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[0].id}" value="${question.answer[0].value}"><label for="${question.answer[0].id}">${question.answer[0].text}</label>
        </p>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[1].id}" value="${question.answer[1].value}"><label for="${question.answer[1].id}">${question.answer[1].text}</label>
        </p>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[2].id}" value="${question.answer[2].value}"><label for="${question.answer[2].id}">${question.answer[2].text}</label>
        </p>
        <button type="submit" class="submit">Submit</button>
    </form>`;
}
function generateCheckQ(question) {
    return `<form id="${question.id}">
    <h2>${question.text}</h2>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[0].id}" value="${question.answer[0].value}"><label for="${question.answer[0].id}">${question.answer[0].text}</label>
        </p>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[1].id}" value="${question.answer[1].value}"><label for="${question.answer[1].id}">${question.answer[1].text}</label>
        </p>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[2].id}" value="${question.answer[2].value}"><label for="${question.answer[2].id}">${question.answer[2].text}</label>
        </p>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[3].id}" value="${question.answer[3].value}"><label for="${question.answer[3].id}">${question.answer[3].text}</label>
        </p>
        <p>
            <input type="${question.type}" name="answer" id="${question.answer[4].id}" value="${question.answer[4].value}"><label for="${question.answer[4].id}">${question.answer[4]].text
}</label >
        </p >
    <p>
        <input type="${question.type}" name="answer" id="${question.answer[5].id}" value="${question.answer[5].value}"><label for="${question.answer[5].id}">${question.answer[5].text}</label>
        </p>
        <button type="submit" class="submit">Submit</button>
    </form>`;
}
function filterQuestionType(question) {
    const questionType = question.type;
    questionType === 'radio' ? generateRadioQ(question) : generateCheck(question);
}

function generateQuestionString(qArray) {
    const questionsHtml = qArray.map((question) => filterQuestionType(question));
}

function renderQuestion() {
    //Sends html to DOM
    container.html('<p>Hello</p>');
}

function runQuizApp() {
    beginQuiz();
}
$(runQuizApp);