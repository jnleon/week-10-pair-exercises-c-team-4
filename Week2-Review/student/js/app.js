let problemNumberScore = 1;
let resultadoproblemaScore = 0;

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

function updateIDontKnowMan() {
    const displayproblemooo = document.querySelector('.currentProblem');
    displayproblemooo.innerText = problemNumberScore;
}

function candleRose() {
    const displayProblemoooScore = document.querySelector('.currentScore');
    displayProblemoooScore.innerText = resultadoproblemaScore;
}

function setQuestionsAnswers() {
    const expression = document.querySelector('.expression')
    const left = getRandomNumber(10);
    const right = getRandomNumber(10);
    expression.innerText = left + ' * ' + right;
    let answers = [];
    answers.push(left * right);
    answers.push(getRandomNumber(82));
    answers.push(getRandomNumber(82));
    answers.push(getRandomNumber(82));
    answers = shuffleArray(answers);

    const answer = document.querySelectorAll('li');
    answer.forEach((item, index) => { item.innerText = answers[index] })
}

document.addEventListener('DOMContentLoaded', () => {
    setQuestionsAnswers();

    let problemNumber = document.querySelector('.currentProblem')
    let scoreNumber = document.querySelector('.currentScore')
    //SELECTOR FOR ANSWERS
    const questions = document.querySelectorAll('li');
    //SELECTOR WHEN FINISH GAME
    const hideStuff = document.querySelectorAll(".show-hide");

    questions.forEach((item) => {
        const startOver = document.getElementById('btnStartOver');
        startOver.addEventListener('click', () => {
            location.reload()
            return false
        })
        item.addEventListener('click', () => {

            let correctamente = document.querySelector('.expression')
            correctamente = correctamente.innerText
            correctamente = eval(correctamente);

            if (problemNumberScore < 10) {
                if (item.innerText == correctamente) {
                    problemNumberScore++;
                    resultadoproblemaScore++;
                }
                else {
                    problemNumberScore++;
                }
                //UPDATES VALUES FOR SCORE,PROBLEM AND GIVES NEW QUESTION
                updateIDontKnowMan();
                candleRose();
                setQuestionsAnswers();
            }
            else {
                //REMOVE ALL OPTIONS, YOU FINISHED THE GAME
                hideStuff.forEach((task) => {
                    task.remove();
            })}
        })
    })
})
