'use strict';
// 1. Create data to work with
// 2. Render start screen with content
// a. Check the screen
// 3. Wnen user clicks start button, show question 1
// 4. When user selects answer, enable submit
// 5. User clicks submit, show next question
// 6. After last question, show results screen

const screens = [
    { //screens[0]
        screen: 1,
        type: 'landing',
        question: ' ',
        answers: [],
        correct: ' ',
        text1: 'When you live in the midwest, you learn quickly that severe weather can happen at any time. Most know how to protect themselves in their own homes, but what about while in public or traveling?',
        text2: ' ',
        buttonType: 'button',
        buttonText: 'Begin Quiz'
    },
];

function renderScreen() {
    //Rendering screen to DOM, starting with screen[0]
    $()
    console.log('renderScreen ran');
}
function beginQuiz() {
    //Shows question 1 on click
    console.log('beginQuiz ran');
}

function runQuizApp() {
    renderScreen();
    beginQuiz();
}
$(runQuizApp);