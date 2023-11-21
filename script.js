//gets the question as a variable
const question = document.querySelector('.question')

//gets answer buttons to asign functions
const answerButtons = [document.querySelector('#answer1'), document.querySelector('#answer2'), document.querySelector('#answer3'), document.querySelector('#answer4')]

const nextButton = document.querySelector('.next')

//sets the questions as strings in an array
const questions = ['which of these is an apple?', 'Which of these is France?', 'who made the quiz?']

//sets answer strings for first question
const answers = [['apple', 'orange', 'banana', 'pumpkin'], ['France', 'U.S.A', 'Peru', 'China'], ['Ben', 'idk', 'Austin', 'Franky'], '']

//makes a changable variable that counts which question we should use
let counter = 0;

//make a function for when the user gets a question right
const correct = function (i) {

    answerButtons[i].style.backgroundColor = 'rgb(88, 229, 88)'

    nextButton.style.width = '100px'

    nextButton.style.height = '50px'

    nextButton.style.backgroundColor = 'lightgray'

    nextButton.textContent = 'NEXT'

    nextButton.style.border = 'solid white 1px'



}

//makes a function that resets the style applied to buttons
const reset = function () {

    nextButton.style = ''

    nextButton.textContent = ''

    for (let i = 0; i < answerButtons.length; i++) {

        answerButtons[i].style.backgroundColor = 'rgb(207, 250, 254)'

    }

}


//function for if the user clicks an incorrect answer
const incorrect = function (i) {

    answerButtons[i].style.backgroundColor = 'red'

}

//changes the text of the question
const changeQuestion = function () {

    if (counter === questions.length || counter > questions.length) {

        question.textContent = 'CONGRATS! you finished the quiz'

        for (let i = 0; i < answerButtons.length; i++) {

            answerButtons[i].style.backgroundColor = 'rgb(214, 245, 255)'
            answerButtons[i].style.border = 'none'

        }

    } else {

        question.textContent = questions[counter]


    }


}

const asignAnswers = function () {
    //gives the correct button the correct answer
    let num = Math.floor(Math.random() * 4)

    answerButtons[num].id = 'correct'

    answerButtons[num].textContent = answers[counter][0]

    answerButtons[num].addEventListener('click', (e) => {

        correct(num)



    })

    console.log(answerButtons)

    //gives the wrong buttons the wrong answers
    switch (num) {

        case 0:
            //gives incorrect answers functions
            answerButtons[num + 1].addEventListener('click', (e) => incorrect(num + 1))
            answerButtons[num + 3].addEventListener('click', (e) => incorrect(num + 3))
            answerButtons[num + 2].addEventListener('click', (e) => incorrect(num + 2))

            //gives incorrect answers text content
            answerButtons[num + 1].textContent = answers[counter][1]
            answerButtons[num + 3].textContent = answers[counter][2]
            answerButtons[num + 2].textContent = answers[counter][3]
            break;
        case 1:
            //gives incorrect answers functions
            answerButtons[num - 1].addEventListener('click', (e) => incorrect(num - 1))
            answerButtons[num + 2].addEventListener('click', (e) => incorrect(num + 2))
            answerButtons[num + 1].addEventListener('click', (e) => incorrect(num + 1))

            //gives incorrect answers text content
            answerButtons[num - 1].textContent = answers[counter][3]
            answerButtons[num + 1].textContent = answers[counter][1]
            answerButtons[num + 2].textContent = answers[counter][2]
            break;
        case 2:
            //gives incorrect answers functions
            answerButtons[num - 2].addEventListener('click', (e) => incorrect(num - 2))
            answerButtons[num + 1].addEventListener('click', (e) => incorrect(num + 1))
            answerButtons[num - 1].addEventListener('click', (e) => incorrect(num - 1))

            //gives incorrect answers text content
            answerButtons[num - 2].textContent = answers[counter][2]
            answerButtons[num - 1].textContent = answers[counter][3]
            answerButtons[num + 1].textContent = answers[counter][1]

            break;
        case 3:
            //gives incorrect answers functions
            answerButtons[num - 1].addEventListener('click', (e) => incorrect(num - 1))
            answerButtons[num - 3].addEventListener('click', (e) => incorrect(num - 3))
            answerButtons[num - 2].addEventListener('click', (e) => incorrect(num - 2))

            //gives incorrect answers text content
            answerButtons[num - 1].textContent = answers[counter][1]
            answerButtons[num - 3].textContent = answers[counter][2]
            answerButtons[num - 2].textContent = answers[counter][3]
            break;

    }



}

asignAnswers()

changeQuestion()

nextButton.addEventListener('click', (e) => {

    console.log(counter)

    counter++;

    console.log(counter)

    reset()

    changeQuestion()

    asignAnswers()

})



