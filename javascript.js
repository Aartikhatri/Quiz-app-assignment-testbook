

const pipeQuestion = [
    {
        question: 'If A can do a piece of work in 4 hours, B and C together in 3 hours and A and C together in 2 hours. How long will B alone take to do it?',
        options: ['10 hr', '12 hr', '8 hr', '24 hr'],
        answerIndex: 1,
    },
    {
        question: 'A can do a piece of work in 24 hours while B alone can do it in 16 hours. If A,B and C working together can finish it in 8 hours, in how many hours can C alone finish the work?',
        options: [36, 24, 48, 72],
        answerIndex: 2,
    },
    {
        question: 'A and B together can finish a piece of work in 12 days. If "A" alone can finish the same work in 20 days, in how many days B alone can finish it?',
        options: [30, 20, 10, 40],
        answerIndex: 0,
    },
    {
        question: 'A can do a piece of work in 80 days.He works at it for 10 days and then B alone finishes remaining work in 42 days. In how many days could both do it? ',
        options: [20, 30, 60, 90],
        answerIndex: 1,
    },
    {
        question: 'A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left the job. In how many days, A alone can finish the remaining work?',
        options: [3, 9, 12, 6],
        answerIndex: 3,
    },
]
const probablityQuestion = [
    {
        question: 'Classical probability is possible in case of _________.',
        options: ['equally likely outcomes', 'Unequally likely outcomes', 'Both A & B', 'None of them'],
        answerIndex: 0,
    },
    {
        question: 'What is the probability of getting 80% or more of the questions correct on a 10-question true-false exam merely by guessing?',
        options: [1 / 16, 5 / 32, 7 / 128, 9 / 64],
        answerIndex: 7 / 128,
    },
    {
        question: 'A is an event, the conditional probability of B given A is equal to _______.',
        options: ['Zero', 'One', 'infinite', ' indeterminate quantity'],
        answerIndex: 3,
    },
    {
        question: 'If it is known that an event A has occurred, the probability of an event B given A is called ________',
        options: ['Conditional probability', 'Subjective probability', 'Both A & B', 'None of them'],
        answerIndex: 0,
    },
    {
        question: 'The definition of a priori probability was originally given by ________.',
        options: ['De moivre', 'Laplace', 'Von-mises', 'Pascal'],
        answerIndex: 1,
    },
]

const age_question = [
    {
        question: 'A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?',
        options: [7, 8, 9, 10],
        answerIndex: 3,
    },
    {
        question: 'A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:',
        options: [14, 18, 20, 22],
        answerIndex: 3,
    },
    {
        question: 'Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?',
        options: [16, 18, 24.5, 28],
        answerIndex: 24.5,
    },
    {
        question: ' "What is Aman "s present age, if after 20 years his age will be 10 times his age 10 years back?',
        options: ['6.2 years', '7.7 years', '13.3 years', '10 years'],
        answerIndex: 2,
    },
    {
        question: '. Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2',
        options: [20, 30, 40, 25],
        answerIndex: 0,
    },
]

const profit_question = [
    {
        question: 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:',
        options: [15, 16, 18, 25],
        answerIndex: 1,
    },
    {
        question: 'If selling price is doubled, the profit triples. Find the profit percent.',
        options: [100, 66.66, 33.33, 50],
        answerIndex: 0,
    },
    {
        question: 'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?',
        options: [3, 4, 5, 6],
        answerIndex: 2,
    },
    {
        question: 'A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?',
        options: [24, 36, 72, 96],
        answerIndex: 2,
    },
    {
        question: 'A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?',
        options: [1190, 1090, 1180, 1200],
        answerIndex: 0,
    },
]


const start_PipeQue = document.getElementById("pipe");
const start_ProQue = document.getElementById("prob");
const start_AgeQue = document.getElementById("age");
const start_ProfitQue = document.getElementById("profit");


const question_count = document.getElementById("question_count");
const timer = document.getElementById("timer");
 score = 0; // variable for score
 wrong = 0; // variable for wrong que





let currentQueCount = 0;
const totalNumberOfQuestion =  pipeQuestion.length // showing total number of question

const total_time = 20;
let seconds = total_time
let time;

// timer function 
function showTime(){
    timer.innerHTML = seconds
    seconds--
    if(seconds == 0){
        seconds =  total_time
        clearInterval(time);
        showNextQue()
    }
    
}

// for print the name in result
function getName(){
    let input_name = document.getElementById("input_name");
    let userInput = input_name.value

        localStorage.setItem( "name" , userInput)    

}

// =======================================================================================================================================

// function ==> click to target button pipe question
start_PipeQue.addEventListener("click" , displayQuestion )

// displaying pipeQuestion page 
function displayQuestion() {
    location.href = "pipeQuestion.html";
   showTime();
  
}





//showNextQue is onclick event that is write in pipe_cistern page 
function showNextQue() {
    const userRadioButtonAnswer = document.querySelector("input[name=ans]:checked");
    
    if(userRadioButtonAnswer === null){
        return true;
    }
    const userAnswer = userRadioButtonAnswer.value;
    const correctAns = document.getElementById("correctAns").innerHTML;
    
    console.log(userAnswer, Number(correctAns))
    
    if (Number(userAnswer) == Number(correctAns)) {
        score++
        console.log("ok");
       
    } else {
        wrong++
        console.log("error");
    }


    let name = localStorage.getItem("name")
    
    
    if ( currentQueCount >=  totalNumberOfQuestion -1  ) {
        document.getElementById("pipe_quiz").innerHTML =
        `<div style="text-align:center;   padding: 2vh; ">
        <div> <b> ${name}</b> Your result is :-</div>    
        <div>Total Questions:-${totalNumberOfQuestion}</div>
        <div>Attempt:-${score + wrong} </div>
        <div>Correct:-${score} </div>
        <div>Wrong:-${wrong}</div>
        <div>Percentage:- ${score / totalNumberOfQuestion *100} % </div>
        <button  onclick="location.reload()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Start Again</button>
        <button onclick="history.back()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Go to Home</button>
        
        </div> `
        
    } else {
    
        currentQueCount++
        pipe_FirstQue()
    }  
    
}

// showing first que of pipe
function pipe_FirstQue() {

    seconds = total_time;
    clearInterval(time)
    showTime();
    time = setInterval(showTime , 1000);
    
  

    const currentQue = pipeQuestion[currentQueCount]
    question_answer.innerHTML = `<div>${currentQueCount + 1 + ".) "}${currentQue.question}</div>`;

    for (let i = 0; i < currentQue.options.length; i++) {

        let que_option = currentQue.options[i]

        question_answer.innerHTML += `<input type="radio" id="r${i}" value="${i}" name="ans">
        <label for="r${i}" class="m-1">${que_option}</label><br> `

     }

     question_answer.innerHTML += `<div id="correctAns" style="display:none"> ${currentQue.answerIndex} </div>`
 }




//   //===============================================================================================



// for probablity quiz 
start_ProQue.addEventListener("click" , displayProbQue);

//displaying probablity Question page 
function displayProbQue() {
    location.href = "probablityQuiz.html";
   showTime();
}



//showNextQue is onclick event that is write in probablity page 
function showNextProbQue() {

    let name = localStorage.getItem("name")

    const userRadioButtonAnswer = document.querySelector("input[name=ans]:checked");

    if(userRadioButtonAnswer === null){
        return true;
    }

    const userAnswer = userRadioButtonAnswer.value;
    const correctAns = document.getElementById("correctAns").innerHTML;
    console.log(userAnswer, Number(correctAns))

    if (Number(userAnswer) == Number(correctAns)) {
        score++
        console.log("ok");
    } else {
        wrong++
        console.log("error");
    }

    if (currentQueCount >=  totalNumberOfQuestion -1  ) {

        document.getElementById("prob_quiz").innerHTML =
            `<div style="text-align:center;   padding: 2vh; ">
        <div> <b>${name}</b> Your result is :-</div>
        <div>Total Questions:-${totalNumberOfQuestion}</div>
        <div>Attempt:-${score + wrong} </div>
        <div>Correct:-${score} </div>
        <div>Wrong:-${wrong}</div>
        <div>Percentage:- ${score / totalNumberOfQuestion *100} % </div>
        <button  onclick="location.reload()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Start Again</button>
        <button onclick="history.back()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Go to Home</button>
        
        </div> `


    } else {

        currentQueCount++
        prob_FirstQue()

    }

}

// showing first que of pipe
function prob_FirstQue() {

    seconds = total_time;
    clearInterval(time)
    showTime();
    time = setInterval(showTime , 1000);
    
  

    const currentQue = probablityQuestion[currentQueCount]
    question_answer.innerHTML = `<div>${currentQueCount + 1 + ".) "}${currentQue.question}</div>`;

    for (let i = 0; i < currentQue.options.length; i++) {

        let que_option = currentQue.options[i]

        question_answer.innerHTML += `<input type="radio" id="r${i}" value="${i}" name="ans">
        <label for="r${i}" class="m-1">${que_option}</label><br> `

    }

    question_answer.innerHTML += `<div id="correctAns" style="display:none"> ${currentQue.answerIndex} </div>`


}

// ==============================================================================================================================

// for starting the Age quiz 
start_AgeQue.addEventListener("click", display_Age_Question);


// displaying Age Question page 
function display_Age_Question() {
    location.href = "age.html";
   showTime();
}



//showNext_AgeQue is onclick event that is write in Age page 
function showNext_AgeQue() {

    let name = localStorage.getItem("name")

    const userRadioButtonAnswer = document.querySelector("input[name=ans]:checked");

    if(userRadioButtonAnswer === null){
        return true;
    }

    const userAnswer = userRadioButtonAnswer.value;
    const correctAns = document.getElementById("correctAns").innerHTML;
    console.log(userAnswer, Number(correctAns))

    if (Number(userAnswer) == Number(correctAns)) {
        score++
        console.log("ok");
    } else {
        wrong++
        console.log("error");
    }

    if (currentQueCount >=  totalNumberOfQuestion -1  ) {
 
        document.getElementById("age_quiz").innerHTML =
            `<div style="text-align:center;   padding: 2vh; ">
        <div><b> ${name}</b> Your result is :-</div>
        <div>Total Questions:-${totalNumberOfQuestion}</div>
        <div>Attempt:-${score + wrong} </div>
        <div>Correct:-${score} </div>
        <div>Wrong:-${wrong}</div>
        <div>Percentage:- ${score / totalNumberOfQuestion *100} % </div>
        <button  onclick="location.reload()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Start Again</button>
        <button onclick="history.back()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Go to Home</button>
        
        </div> `

    } else {

        currentQueCount++
        age_FirstQue()

    }
    
    
}

// showing first que of Age
function age_FirstQue() {

    seconds = total_time;
    clearInterval(time)
    showTime();
    time = setInterval(showTime , 1000);
    
  

    const currentQue = age_question[currentQueCount]
    question_answer.innerHTML = `<div>${currentQueCount + 1 + ".) "}${currentQue.question}</div>`;

    for (let i = 0; i < currentQue.options.length; i++) {

        let que_option = currentQue.options[i]

        question_answer.innerHTML += `<input type="radio" id="r${i}" value="${i}" name="ans">
        <label for="r${i}" class="m-1">${que_option}</label><br> `

    }

    question_answer.innerHTML += `<div id="correctAns" style="display:none"> ${currentQue.answerIndex} </div>`


}


  //====================================================================================================


 // for starting the profit loss quiz 
start_ProfitQue.addEventListener("click", display_profitLoss_Que);


// displaying profit loss Question page 
function display_profitLoss_Que() {
    window.location.href = "profitLoss.html";
   showTime();
}



//showNextQue is onclick event that is write in pipe_cistern page 
function showNext_profitLossQue() {

    let name = localStorage.getItem("name")

    const userRadioButtonAnswer = document.querySelector("input[name=ans]:checked");

    if(userRadioButtonAnswer === null){
        return true;
    }

    const userAnswer = userRadioButtonAnswer.value;
    const correctAns = document.getElementById("correctAns").innerHTML;
    console.log(userAnswer, Number(correctAns))

    if (Number(userAnswer) == Number(correctAns)) {
        score++
        console.log("ok");
    } else {
        wrong++
        console.log("error");
    }

    if (currentQueCount >=  totalNumberOfQuestion -1 ) {

        document.getElementById("profitLoss_quiz").innerHTML =
            `<div style="text-align:center;   padding: 2vh; ">
        <div> <b> ${name} </b> Your result is :-</div>
        <div>Total Questions:-${totalNumberOfQuestion}</div>
        <div>Attempt:-${score + wrong} </div>
        <div>Correct:-${score} </div>
        <div>Wrong:-${wrong}</div>
        <div>Percentage:- ${score / totalNumberOfQuestion *100} % </div>
        <button  onclick="location.reload()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Start Again</button>
        <button onclick="history.back()" class="rounded-5 p-2 w-25 mt-1 border-0" style="color: white; background-color: #22a8e7;">Go to Home</button>
        
        </div> `
    } else {

        currentQueCount++
        profitLoss_FirstQue()

    }
    
   
}

function profitLoss_FirstQue() {

    seconds = total_time;
    clearInterval(time)
    showTime();
    time = setInterval(showTime , 1000);
    
  

    const currentQue = profit_question[currentQueCount]
    question_answer.innerHTML = `<div>${currentQueCount + 1 + ".) "}${currentQue.question}</div>`;

    for (let i = 0; i < currentQue.options.length; i++) {

        let que_option = currentQue.options[i]

        question_answer.innerHTML += `<input type="radio" id="r${i}" value="${i}" name="ans">
        <label for="r${i}" class="m-1">${que_option}</label><br> `

    }

    question_answer.innerHTML += `<div id="correctAns" style="display:none"> ${currentQue.answerIndex} </div>`


}

//   ===============================================================================================
