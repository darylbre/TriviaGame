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
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}
showSlide(0);
function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function updateClock(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'days: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }
  
  updateClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
  var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');


