$(document).ready(function(){

    const APIKEY = "620f118234fd62156585877b";

    getScores();


});

function getScores(limit = 10, all = true) {

    let set = {
        "async": true,
        "crossDomain": true,
        "url": "https://quizwebsiteasg2-c11c.restdb.io/rest/leaderboard",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "620f118234fd62156585877b",
            "cache-control": "no-cache"
        },
    }

    $.ajax(set).done(function (response) {

      let content = "";

      for (var i = 0; i < response.length && i < limit; i++) {

        console.log(response);

        content = `${content}<tr id='${Leaderboard-list}'><td>${response[i].Username}</td>
        <td>${response[i].Score}</td><td>${response[i].Date}</tr>`;

      }
      $("#Leaderboard-list tbody").html(content);
    });
}

