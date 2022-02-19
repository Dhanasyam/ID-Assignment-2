$(document).ready(function(){

    const APIKEY = "620f118234fd62156585877b";



});
function getScores(limit = 10, all = true){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://quizwebsiteasg2-c11c.restdb.io/rest/leaderboard",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
    console.log(response);

    let content = "";

    for (var i = 0; i < response.length && i < limit; i++){
        
        }
    })
}

