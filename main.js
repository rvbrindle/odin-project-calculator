/*global $ */
$(document).ready(function () {

    'use strict';
    var operatorClicked = false;
    var collectedOperator = '';
    var numberOne = '';
    var numberTwo = '';
    var answer = undefined;


    function collectNumber(clickedNumber) {
        var collectedNumber = $(clickedNumber).text();
        return collectedNumber;
    }

    function setOperatorClicked(clickedNumber) {
        collectedOperator = $(clickedNumber).text();
        return collectedOperator;
    }

    function toScreen(number) {
        $(number).text();
        $('.screen').html(number);
    }

    function findAnswer(a, b) {
        if (collectedOperator === '+') {
            return (a + b);
        } else if (collectedOperator === '-') {
            return (a - b);
        } else if (collectedOperator === 'x') {
            return (a * b);
        } else if (collectedOperator === '÷') {
            return (a / b);
        }
    }

    function clearAll() {
        operatorClicked = false;
        collectedOperator = '';
        numberOne = '';
        numberTwo = '';
        answer = undefined;
        $('.screen').html('');
    }

    function furtherComputing(answer) {
        numberOne = answer;
        numberTwo = '';
    }

    $('.number-button').click(function () {
        var collectedNumber = collectNumber(this);
        if (collectedOperator === null) {
            clearAll();
        }
        if (operatorClicked === false) {
            numberOne += collectedNumber;
            var a = parseInt(numberOne, 10);
            numberOne = a;
            toScreen(numberOne);

        } else if (operatorClicked === true) {
            numberTwo += collectedNumber;
            var b = parseInt(numberTwo, 10);
            numberTwo = b;
            toScreen(numberTwo);
        }
    });

    $('.operator-button').click(function () {
        if (numberOne === '') { //tests for operator with no first number
            return;
        }
        if ($(this).is('#answer')) {
            return;
        } else if ($(this).is('#clear')) {
            return;
        }

        collectedOperator = setOperatorClicked(this);
        toScreen(collectedOperator);
        operatorClicked = true;
    });

    $('#answer').click(function () {
        answer = findAnswer(numberOne, numberTwo);
        toScreen(answer);
        furtherComputing(answer);
        collectedOperator = null;
    });

    $('#clear').click(function () {
        clearAll();
    });
});