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
        
        var numofQn = 0;
        console.log(data);
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

        // for (let t = 0; t < questionList.length;t++){

        //     $("#progressText").text("Question " + (t+1));
        //     question = questionList[t];
        //     printingQuestion(question);
            
        // }
        console.log(questionList);
        q = questionList[numofQn];
        printingQuestion(q,numofQn);
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



function printingQuestion(q,numofQn){

    $("#progressText").text("Question " + (numofQn+1));
    
    $("#questionTitle").text(q.question);

    console.log(q.question)

    $("#c1").text(q.answers.answer_a);
    $("#c2").text(q.answers.answer_b);
    $("#c3").text(q.answers.answer_c);
    $("#c4").text(q.answers.answer_d);

    numofQn++
    
}



function returnAnswer(number,questionList){

    var scores = Number($("#score").text());
    var chk = checkAnswer(number,questionList[0]);
    if(chk == true){
        scores += 1;
    }
    console.log("Score: " + scores);
    $("#score").text(scores);
    questionList.shift()
    if(questionList.length === 0 ){
        console.log(scores);
        endOfQuiz()
        return;
    }
    var n = 10 - questionList.length
    var q1 = questionList[0];
    printingQuestion(q1,n)
}

function checkAnswer(n,qchk){
    console.log("chkAns" + qchk.question);
    var userCharCode = getCharCode(n);
    console.log("user" + userCharCode);
    var ans = getAnswer(qchk.correct_answers);
    var qnCharCode = getCharCode(ans);
    console.log("answer" + qnCharCode);

    if(userCharCode === qnCharCode){
        console.log("Correct!");
        return true;
    }
    else{
        console.log("Wrong!");
        return false;
    }

}

function getAnswer(obj){
    
    let count = 0;
    for(let prop in obj) {
        console.log(obj[prop])
        ++count
        if(obj[prop] === "true") {
          break;
        }
    }
    return count;
}

function getCharCode(n){
    if(n === 1){
        charCode = 97;
    }
    else if (n === 2){
        charCode = 98;
    }
    else if (n === 3){
        charCode = 99;
    }
    else{
        charCode = 100;
    }
    return charCode;
}

function endOfQuiz(){
    var finalScore = Number($("#score").text())
    $(".hud-prefix").hide()
    $("#score").hide();
    $("#questionTitle").html("<h1>Quiz finished!<br>Final Score: "
    + finalScore + "</h1>");
    $(".choice-container").hide();
    $("#progressText").hide()
}
