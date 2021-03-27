const gotQuiz = [
    {
        question: 'Which of the following is not Dany\'s Dragons? ',
        a: 'Drogo',
        b: 'Rhaegal',
        c: 'Balerion',
        d: 'Viserion',
        correct: 'c'
    },
    {
        question: 'Who was Sansa\'s first husband?',
        a: 'Ramsey',
        b: 'Gendry',
        c: 'Joffrey',
        d: 'Tyrion',
        correct: 'd'
    },
    {
        question: 'Where are the faceless men from?',
        a: 'Braavos',
        b: 'Winterfell',
        c: 'Qarth',
        d: 'King\'s landing',
        correct: 'a'
    },
    {
        question: 'What did you think of the last season?',
        a: 'Yayyyy',
        b: 'Crap',
        c: 'OK',
        d: 'Great',
        correct: 'b'
    },
    {
        question: 'Who were you rooting for to sit on the throne?',
        a: 'Cersei',
        b: 'Dany',
        c: 'Jon',
        d: 'Sansa',
        correct: 'b'
    }

]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentgotQuiz = gotQuiz[currentQuiz];

    questionEl.innerText = currentgotQuiz.question;
    a_text.innerText = currentgotQuiz.a;
    b_text.innerText = currentgotQuiz.b;
    c_text.innerText = currentgotQuiz.c;
    d_text.innerText = currentgotQuiz.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === gotQuiz[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < gotQuiz.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly ${score}/${gotQuiz.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>`;
            
        }
    }
});