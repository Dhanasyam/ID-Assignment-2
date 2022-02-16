$(document).ready(function(){
    console.log("ready");
});

var questionList = []

$.ajax({
    type: "GET",
    dataType: "json",
    contentType: "text/plain",
    url: "https://quizapi.io/api/v1/questions?apiKey=Z2oZ44G44xVOWQeKf8dXuY9JvK2IMfG7acVBoPw3&category=linux&difficulty=Easy&limit=10&tags=Linux",
    headers: {

    },
    success: function(data){
        for(let i = 0; i < 10; i ++){
            questionList[i] = data[i];
        }
        console.log(questionList);
    }
});

function printingQuestion(questionList){
    $()
}



