const formElement = document.getElementById("quiz-form");
let currentQIndex = 0;
console.log("form children", formElement.children)

function startQuiz(event = {}) {
    console.log("start quiz", event.target)

    return function() {
        console.log("quiz over")
    }
}

function getNextQuestion() {
    console.log("next question", currentQIndex)

    const currentQuestion = questionsArray[currentQIndex]
    if (currentQIndex > 5) {
        console.log("quiz is over")
    }
}