let score = 0;
let userAnswer;
let wrong = 0;
let timer;
const myQuestions = [
    {
        question: "1. Who recorded the song &quot;What's Going On&quot;?",
        option1: "Stevie Wonder",
        option2: "Smokey Robinson",
        option3: "Marvin Gaye",
        option4: "David Ruffin",
        correctOption: "Marvin Gaye"
    }

    ,
    {
        question: "2. Which instrument is a woodwind?",
        option1: "Trumpet",
        option2: "Tuba",
        option3: "Clarinet",
        option4: "Trombone",
        correctOption: "Clarinet"
    }
    ,
    {
        question: "3. What city is James Brown from?",
        option1: "Savannah",
        option2: "Atlanta",
        option3: "Macon",
        option4: "Augusta",
        correctOption: "Augusta"
    }
    ,
    {
        question: "4. Who recorded the original version of the song &quot;Hound Dog&quot;?",
        option1: "Willa Mae Big Mama Thornton",
        option2: "Elvis Presley",
        option3: "Carl Perkins",
        option4: "Chuck Berry",
        correctOption: "Willa Mae Big Mama Thornton"
    }
    ,
    {
        question: "5. Steward Copeland was the drummer for which band?",
        option1: "The Who",
        option2: "The Doors",
        option3: "The Police",
        option4: "Rolling Stones",
        correctOption: "The Police"
    }
    ,
    {
        question: "6. The Stratocaster is a model of which guitar maker?",
        option1: "Fender",
        option2: "Ibanez",
        option3: "Martin",
        option4: "ESP",
        correctOption: "Fender"
    }
    ,
    {
        question: "7. Whose childhood hit was Fingertips?",
        option1: "Marvin Gaye",
        option2: "Stevie Wonder",
        option3: "Smokey Robinson",
        option4: "Chuck Berry",
        correctOption: "Stevie Wonder"
    }
    ,
    {
        question: "8. What was Madonna’s first UK top ten single?",
        option1: "Like a Virgin",
        option2: "Everybody",
        option3: "Like a Prayer",
        option4: "Holiday",
        correctOption: "Holiday"
    }
    ,
    {
        question: "9. Who recorded the original version of the song &quot;Johnny B Goode &quot;?",
        option1: "Willa Mae Big Mama Thornton",
        option2: "Elvis Presley",
        option3: "Carl Perkins",
        option4: "Chuck Berry",
        correctOption: "Chuck Berry"
    }
    ,
    {
        question: "10. When was Chess Records founded?",
        option1: "1920",
        option2: "1965",
        option3: "1948",
        option4: "1950",
        correctOption: "1950"

    }];


function getValue(e) {
    e.preventDefault();
    const value = $('input[name="radio"]:checked').val();
    console.log(value);
    userAnswer = value;
    checkAnswer();
}

let countDown = 10;
let currQuestion = 0;

$(document).on("submit", "#questionForm", getValue);

function startGame() {
    // setInterval(displayCountDown, 1000);
    displaymyQuestion();
    currQuestion = 0;
    setInterval(displaymyQuestion, 10000);
}

// nextQuestQueion function to reset counter, increase currQuestion, call displaymyQuestion()
function nextQuestion() {
    countDown = 10;
   clearInterval(timer);
    currQuestion++;
    displaymyQuestion();


}

function displaymyQuestion() {
    // timer = setInterval(displayCountDown, 1000)
    timer =setInterval(displayCountDown, 1000);
    const questionDiv = `
    <div>
    <h3 class="question">${myQuestions[currQuestion].question}</h3>
    <form id="questionForm">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="radio" id="radio1" value="${myQuestions[currQuestion].option1}">
            <label class="form-check-label" for="radio1">
            ${myQuestions[currQuestion].option1}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="radio" id="radio2" value="${myQuestions[currQuestion].option2}">
            <label class="form-check-label" for="radio2">
                ${myQuestions[currQuestion].option2}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="radio" id="radio3" value="${myQuestions[currQuestion].option3}">
            <label class="form-check-label" for="radio2">
                ${myQuestions[currQuestion].option3}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="radio" id="radio4" value="${myQuestions[currQuestion].option4}">
            <label class="form-check-label" for="radio2">
                ${myQuestions[currQuestion].option4}
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
    `

    $("#root").html(questionDiv);
    setTimeout(nextQuestion, 10000);
}

function displayCountDown() {
    $("#countdown").text(countDown);
    countDown--;
    // if time runs out: wrong++, next question
    // clearInterval(timer)
    if (countDown === 0) {
        wrong++;
    }
}
function checkAnswer() {
    console.log('User Answer: ', userAnswer);
    const correctAnswer = myQuestions[currQuestion].correctOption;
    console.log('Correct Answer: ', correctAnswer)
    if (userAnswer === correctAnswer) {
        score++;
        alert("Right");
    } else {
        alert("Wrong");
    }
    currQuestion++;
    nextQuestion()
    if (currQuestion === myQuestions.length - 1) // game over function currQuestion = 0;
        countDown = 10;
    function gameOver() {
        if (currQuestion === 0) {
            gameOver;
            alert("You got" + score + "/" + myQuestions.length);
        }
    }
}
// alert("You got" + score + "/" + myQuestions.length);

// displayCountDown();
startGame();
// setInterval(displaymyQuestions, 10000);
// setInterval(displayCountDown, 1000);


