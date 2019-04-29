//Goal: Only show single fieldset/button at a time Button toggles view on next pair

//1. Show first question on doc ready
//target .js-group-1 and toggle class .current
//2. When group-1 btn clicked --> show next pair
//on click toggle class on current and on next pair

'use strict';
const $group1 = $('.js-group-1');
const $group2 = $('.js-group-2');
const $group3 = $('.js-group-3');

function renderGroup1() {
    $group1.addClass('current');
}
function submitBtn() {
    $('.live').on('click', 'button.js-group-1', function (event) {
        event.preventDefault();
        $('.js-group-1.current').removeClass('current');
        $group2.addClass('current');
    })
}
function nextBtn() {
    $('.live').on('click', 'button.js-group-2', function (event) {
        event.preventDefault();
        $('.js-group-2.current').removeClass('current');
        $group3.addClass('current');
    })
}
function restartBtn() {
    $('.live').on('click', 'button.js-group-3', function (event) {
        event.preventDefault();
        $('.js-group-3.current').removeClass('current');
        renderGroup1();
    })
}
function handleQuizApp() {
    renderGroup1();
    submitBtn();
    nextBtn();
    restartBtn();
};
$(handleQuizApp);