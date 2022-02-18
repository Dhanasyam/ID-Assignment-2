$(document).ready(function(){
    console.log("ready");
});

var questionList = []

function loadQuiz(onSuccess){

}

$.ajax({
    type: "GET",
    dataType: "json",
    contentType: "text/plain",
    url: "https://quizapi.io/api/v1/questions?apiKey=Z2oZ44G44xVOWQeKf8dXuY9JvK2IMfG7acVBoPw3&category=linux&difficulty=Easy&tags=Linux&multiple_correct_answers=false",
    headers: {

    },
    success: function(data){
        let numCollect = 0;
        for (let i = 0; i < data.length; i++){
            if(questionList.length == 10){
                break;
            }
            let curr = data[i];
            var count = countProperties(curr.answers);
            if(count === 4){
                questionList.push(curr);
            }
            
        }
        printingQuestion(questionList);
    }
});

function countProperties(obj) {
    let count = 0;
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop) && obj[prop]) {
          ++count;
        }

    }

    return count;
}



function printingQuestion(questionList){

    q = questionList[0];
    
    $("#questionTitle").text(q.question);

    console.log(q.question)

    $("#c1").text(q.answers.answer_a);
    $("#c2").text(q.answers.answer_b);
    $("#c3").text(q.answers.answer_c);
    $("#c4").text(q.answers.answer_d);
    
}

function checkAnswer(number){
    console.log(number);
}



