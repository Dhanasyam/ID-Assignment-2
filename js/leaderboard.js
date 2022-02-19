$(document).ready(function(){

    const APIKEY = "620f118234fd62156585877b";

    $("input#name-submit").on("click", function(e){

        e.preventDefault();
        var timeElapsed = Date.now();
        var today = new Date(timeElapsed);
        let Name = $("#username").val();
        let Score = Number($("#score").text());
        let quizDate = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
    
        let jsondataleaderboard = {
            "Username":Name,
            "Score": Score,
            "Date": quizDate
        }
    
        console.log(jsondataleaderboard);
    
        set={
            "async": true,
            "crossDomain": true,
            "url": "https://quizwebsiteasg2-c11c.restdb.io/rest/leaderboard",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "620f118234fd62156585877b",
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondataleaderboard)
        }

        $.ajax(set).done(function (response) {
            console.log(response);
            
            $("#contact-submit").prop( "disabled", false);

            getScores();
          });
    
        window.location.href = "index.html";
    
    })



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

        content = `${content}<tr id='${i + 1}'><td>${response[i].Username}</td>
        <td>${response[i].Score}</td><td>${response[i].Date}</tr>`;

      }
      $("#Leaderboard-list tbody").html(content);
    });
}

