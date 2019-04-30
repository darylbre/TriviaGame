const myQuestions = [
    {
        question: "Who is the artist that sang What's going on?",
        answers: {
            a: "Stevie Wonder",
            b: "Smokey Robinson",
            c: "Marvin Gaye"
        },
        correctAnswer: "c"
    },
    {
        question: "Which instrument is a woodwind?",
        answers: {
            a: "Trumpet",
            b: "Tuba",
            c: "Clarinet"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is James Brown from?",
        answers: {
            a: "Savannah",
            b: "Atlanta",
            c: "Macon",
            d: "Augusta"
        },
        correctAnswer: "d"
    }
];

function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
    console.log("buildquiz");
    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// function buildQuiz() { }

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


