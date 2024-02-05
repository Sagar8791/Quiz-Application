const quizDB = [
    {
    question: "Q1: What is HTML?",
    a:  "HTML describes the structure of a webpage",
    b:  "HTML is the standard markup language mainly used to create web pages",
    c:  "HTML consists of a set of elements that helps the browser how to view the content",
    d:  "All of the mentioned",
    ans: "ans4"
},
{

    question:"Q2: Who is the father of HTML?",
   a: "Rasmus Lerdorf",
   b: "Tim Berners-Lee",
   c: "Brendan Eich",
   d: "Sergey Brin",
   ans: "ans4"
},
{
   question:"Q3: HTML stands for __________",
    a: "HyperText Markup Language",
    b: "HyperText Machine Language",
    c: "HyperText Marking Language",
    d: "HighText Marking ",
    ans: "ans1"
},
{
   question: "Q4: What is the correct syntax of doctype in HTML5?",
a:"</doctype html>",
b:"<doctype html>",
c:"<doctype html!>",
d:"<!doctype html>",
ans: "ans2"
}

    ];

const question = document.querySelector('.question');
const option1  = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');

const showScore=document.querySelector('#showScore');



let questionCount = 0;
let score=0;


const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;


    
}

loadQuestion();


const getCheckedAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
    });
      return answer;
};

const deselectAll = () =>{
  answers.forEach((curAnsElem) => curAnsElem.checked=false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer= getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
 
        score++;
    };

     questionCount++;

   deselectAll();


    if(questionCount < quizDB.length){
       
        loadQuestion();
    }else{
      showScore.innerHTML=`
      <h3> Your scored ${score}/${quizDB.length}  </h3>
      <button class="btn" onclick="location.reload()">Play Again </button>
      `;
      

      showScore.classList.remove('scoreArea');
    }
   
});