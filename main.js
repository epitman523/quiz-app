'use strict';


const container = $('section.live');
const questionContainer = $('section.live div.question');
const submitBtn = $('section.live div.question form button.js-submit');
const questions = [
    {//questions[0]
        id: 'question_1',
        text: 'What are the 3 basic guidelines to tornado safety',
        type: 'radio',
        answers: [
            {//questions[0].answers[0]
                id: 'answer1-1',
                text: 'Get in, get down, cover up',
                value: 'A'
            },
            {//questions[0].answers[1]
                id: 'answer2-1',
                text: 'Get up, get down, get funky',
                value: 'B'
            },
            {//questions[0].answers[2]
                id: 'answer3-1',
                text: 'Go out, phone up, record',
                value: 'C'
            }
        ]
    },
    {//questions[1]
        id: 'question_2',
        text: 'Overall, where is the safest place to be during a tornado?',
        type: 'radio',
        answers: [
            {//questions[1].answers[0]
                id: 'answer1-2',
                text: 'A trailor park',
                value: 'A'
            },
            {//questions[1].answers[1]
                id: 'answer2-2',
                text: 'Completely underground',
                value: 'B'
            },
            {//questions[1].answers[2]
                id: 'answer3-2',
                text: 'Highway overpass',
                value: 'C'
            }
        ]
    },
    {//questions[2]
        id: 'question_3',
        text: 'When staying in a hotel or motel, where is the safest place to go durning severe weather?',
        type: 'radio',
        answers: [
            {//questions[2].answers[0]
                id: 'answer1-3',
                text: 'Hotel/Motel lobby',
                value: 'A'
            },
            {//questions[2].answers[1]
                id: 'answer2-3',
                text: 'Ride it out in the vehicle you arrived in',
                value: 'B'
            },
            {//questions[2].answers[2]
                id: 'answer3-3',
                text: 'Interior bathrooms or closets',
                value: 'C'
            }
        ]
    },
    {//questions[3]
        id: 'question_4',
        text: 'Which of these is NOT true when you encounter severe weather while on the road?',
        type: 'radio',
        answers: [
            {//questions[3].answers[0]
                id: 'answer1-4',
                text: 'If you know there will be severe weather along your path of travel, drive really fast to get out ahead of the storm.',
                value: 'A'
            },
            {//questions[3].answers[1]
                id: 'answer2-4',
                text: 'Be familiar with area along your path of travel and know what county you are in. National Weather Service and severe weather warnings are on a county-by-county basis.',
                value: 'B'
            },
            {//questions[3].answers[2]
                id: 'answer3-4',
                text: 'Find a local radio station and listen to live updates.',
                value: 'C'
            }
        ]
    },
    {//questions[4]
        id: 'question_5',
        text: 'What should you NOT do when you get caught in a hailstorm while driving?',
        type: 'radio',
        answers: [
            {//questions[4].answers[0]
                id: 'answer1-5',
                text: 'Get off the roadway and find shelter under an awning, carwash or other structure.',
                value: 'A'
            },
            {//questions[4].answers[1]
                id: 'answer2-5',
                text: 'Find a highway overpass or a bridge and park underneath.',
                value: 'B'
            },
            {//questions[4].answers[2]
                id: 'answer3-5',
                text: 'Leave your vehicle and get into a sturdy structure.',
                value: 'C'
            }
        ]
    },
    {//questions[5]
        id: 'question_6',
        text: 'Which is the best option if you experience a tornado while traveling on the road?',
        type: 'radio',
        answers: [
            {//questions[5].answers[0]
                id: 'answer1-6',
                text: 'Try to outrun the tornado.',
                value: 'A'
            },
            {//questions[5].answers[1]
                id: 'answer2-6',
                text: 'Hide under a highway overpass.',
                value: 'B'
            },
            {//questions[5].answers[2]
                id: 'answer3-6',
                text: 'Find a substantial building for shelter.',
                value: 'C'
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
                <label class="option" for="${item.answers[0].id}">
                    <input tabindex="0" type="${item.type}" id="${item.answers[0].id}" name="answers" value="${item.answers[0].value}" />
                    <span class="checkmark"></span>
                    ${item.answers[0].text}
                </label>
                <label class="option" for="${item.answers[1].id}">
                    <input tabindex="0" type="${item.type}" id="${item.answers[1].id}" name="answers" value="${item.answers[1].value}" />
                    <span class="checkmark"></span>
                    ${item.answers[1].text}
                </label>
                <label class="option" for="${item.answers[2].id}">
                    <input tabindex="0" type="${item.type}" id="${item.answers[2].id}" name="answers" value="${item.answers[2].value}" />
                    <span class="checkmark"></span>
                    ${item.answers[2].text}
                </label>
                <button type="submit" class="secondary js-submit current" disabled>Submit</button>
            </form>
            <div class="response">
                <p class="verdict"></p>
                <p class="info"></p>
                <button type="button" class="primary js-next">Next <i class="fas fa-chevron-right"></i></button>
            </div>
        `;
}

//Start Quiz
function beginQuiz() {
    container.on('click', '.landing > button', event => {
        $('.landing.current').removeClass('current');
        $('.question').addClass('current');
        questionContainer.html(htmlStrings[0]);
        autoFocus();
        renderScore();
    });
}

//Rendering Questions
function renderQuestion() {
    //Render the html string to container in the DOM
    console.log('renderQuestion ran');
    questionContainer.html(htmlStrings[counter]);

}
//Auto-Focus Functions
function autoFocus() {
    console.log('Autofocus ran');
    $('.live form').find('label:nth-child(2)')
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
    let userAnswer = $(event.currentTarget).siblings('label').find('input[name="answers"]:checked').val();
    let rightAnswer = correctAnswers[counter];
    if (userAnswer === rightAnswer) {
        $('p.verdict').addClass('correct');
        correctAnswerResponse();
        score += 1;
        renderScore();
    } else {
        $('p.verdict').addClass('wrong');
        wrongAnswerResponse();
    }
}
function clearVerdict() {
    $('p.verdict.correct').removeClass('correct');
    $('p.verdict.wrong').removeClass('wrong');
}
function correctAnswerResponse() {
    $('p.verdict').text('Correct');
}
function wrongAnswerResponse() {
    $('p.verdict').text('Incorrect');
}

//Next Button Functions
function handleNextBtn() {
    container.on('click', 'button.js-next', event => {
        counter += 1;
        if (counter === 6) {
            renderResults();
        } else {
            renderQuestion(htmlStrings[counter]);
            autoFocus();
            showProgress(counter);
            renderScore();
            renderCounter();
            clearVerdict();
        }
    });
}

//Results screen
function renderResults() {
    $('div.question.current').removeClass('current');
    $('div.results').addClass('current');
    $('section.score').addClass('hidden');
}

//Restart Button Functions
function handleRestartButton() {
    container.on('click', 'button.js-restart', function () {
        location.reload();
    });
}
// Counter Section Functions
function renderCounter() {
    $('span.js-counter').html(counter + 1);
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
    $('ul.progress li:first-child').addClass('current');
}
function showProgress() {
    $('ul.progress li.current').removeClass('current').next('li').addClass('current');
}

function runQuizApp() {
    autoFocus();
    beginQuiz();
    handleSubmitToggle();
    handleSubmitBtn();
    handleNextBtn();
    handleRestartButton();
    renderProDots();
}
$(runQuizApp);