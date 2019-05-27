'use strict';


const container = $('section.live');
const questionContainer = $('section.live div.question');
const submitBtn = $('section.live div.question form button.js-submit');
const questions = [
    {//questions[0]
        id: 'question_1',
        text: 'Question 1',
        type: 'radio',
        answers: [
            {//questions[0].answers[0]
                id: 'answer1-1',
                text: 'Answer 1',
                value: 'A'
            },
            {//questions[0].answers[1]
                id: 'answer2-1',
                text: 'Answer 2',
                value: 'B'
            },
            {//questions[0].answers[2]
                id: 'answer3-1',
                text: 'Answer 3',
                value: 'C'
            }
        ]
    },
    {//questions[1]
        id: 'question_2',
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
        id: 'question_3',
        text: 'Question 3',
        type: 'radio',
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
            }
        ]
    },
    {//questions[3]
        id: 'question_4',
        text: 'Question 4',
        type: 'radio',
        answers: [
            {//questions[3].answers[0]
                id: 'answer1-4',
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[3].answers[1]
                id: 'answer2-4',
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[3].answers[2]
                id: 'answer3-4',
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    },
    {//questions[4]
        id: 'question_5',
        text: 'Question 5',
        type: 'radio',
        answers: [
            {//questions[4].answers[0]
                id: 'answer1-5',
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[4].answers[1]
                id: 'answer2-5',
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[4].answers[2]
                id: 'answer3-5',
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    },
    {//questions[5]
        id: 'question_6',
        text: 'Question 6',
        type: 'radio',
        answers: [
            {//questions[5].answers[0]
                id: 'answer1-6',
                text: 'Answer 1',
                value: 'A',
                correct: true
            },
            {//questions[5].answers[1]
                id: 'answer2-6',
                text: 'Answer 2',
                value: 'B',
                correct: false
            },
            {//questions[5].answers[2]
                id: 'answer3-6',
                text: 'Answer 3',
                value: 'C',
                correct: false
            }
        ]
    }
];
const correctAnswers = ['A', 'B', 'C', 'A', 'B', 'C'];
const htmlStrings = questions.map(item => buildString(item));
let counter = 0;
let score = 0;

function buildString(item) {
    return `
            <form id="${item.id}">
                <h2>${item.text}</h2>
                <p>
                    <input type="${item.type}" id="${item.answers[0].id}" name="answers" value="${item.answers[0].value}" /><label for="${item.answers[0].id}">${item.answers[0].text}</label>
                </p>
                <p>
                    <input type="${item.type}" id="${item.answers[1].id}" name="answers" value="${item.answers[1].value}" /><label for="${item.answers[1].id}">${item.answers[1].text}</label>
                </p>
                <p>
                    <input type="${item.type}" id="${item.answers[2].id}" name="answers" value="${item.answers[2].value}" /><label for="${item.answers[2].id}">${item.answers[2].text}</label>
                </p>
                <button type="submit" class="js-submit current" disabled>Submit</button>
            </form>
            <div class="response">
                <p class="verdict"></p>
                <p class="info"></p>
                <button type="button" class="js-next">Next</button>
            </div>
        `;
}

//Start Quiz
function beginQuiz() {
    container.on('click', '.landing > button', event => {
        $('.landing.current').removeClass('current');
        $('.question').addClass('current');
        questionContainer.html(htmlStrings[0]);
        renderScore();
    });
}

//Rendering Questions
function renderQuestion() {
    //Render the html string to container in the DOM
    console.log('renderQuestion ran');
    questionContainer.html(htmlStrings[counter]);

}
//Submit Functions
function handleSubmitToggle() {
    container.on('change', 'input[name=answers]', event => {
        $(event.currentTarget).parents('form').find('button.js-submit').prop('disabled', false);
    })
}
function handleResponseToggle() {
    $('button.js-submit.current').removeClass('current')
    $('div.response').addClass('current');
}
function handleSubmitBtn() {
    container.on('click', 'button.js-submit', event => {
        event.preventDefault();
        checkAnswer(event);
        handleResponseToggle();
    });
}
function checkAnswer(event) {
    let userAnswer = $(event.currentTarget).siblings('p').find('input[name="answers"]:checked').val();
    let rightAnswer = correctAnswers[counter];
    if (userAnswer === rightAnswer) {
        correctAnswerResponse();
        score += 1;
        renderScore();
    } else {
        wrongAnswerResponse();
    }
}
function correctAnswerResponse() {
    $('p.verdict').text('Correct');
}
function wrongAnswerResponse() {
    $('p.verdict').text('Sorry, you answered incorrectly');
}

//Next Button Functions
function handleNextBtn() {
    container.on('click', 'button.js-next', event => {
        counter += 1;
        if (counter === 6) {
            renderResults();
        } else {
            renderQuestion(htmlStrings[counter]);

            renderScore();
        }
    });
}

//Results screen
function renderResults() {
    $('div.question.current').removeClass('current');
    $('div.results').addClass('current');
}

//Restart Button Functions
function handleRestartButton() {
    container.on('click', 'button.js-restart', function () {
        location.reload();
    });
}

//Score Section Functions
function renderScore() {
    $('span.js-score').html(score);
    $('span.js-total').html(htmlStrings.length);
    $('section.score.hidden').removeClass('hidden');
}
function renderProDots() {
    const dotCount = htmlStrings.length;
    let i = 0;
    while (i < dotCount) {
        $('ul.progress').append('<li></li>');
        i++;
    }
}

function runQuizApp() {
    beginQuiz();
    handleSubmitToggle();
    handleSubmitBtn();
    handleNextBtn();
    handleRestartButton();
    renderProDots();

}
$(runQuizApp);