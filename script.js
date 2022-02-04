$(document).ready(function(){

});

$.ajax({
    type: "GET",
    dataType: "json",
    contentType: "text/plain",
    url: "https://quizapi.io/api/v1/questions?apiKey=Z2oZ44G44xVOWQeKf8dXuY9JvK2IMfG7acVBoPw3&category=linux&difficulty=Easy&limit=10&tags=Linux",
    headers: {

    },
    success: function(data){
        console.log(data);
    }
})

LottieInteractivity.create({
    mode:"scroll",
    player:'#firstLottie',
    actions: [
        {
            visibility:[0,1],
            type: "seek",
            frames: [0, 120],
        },
    ]
});