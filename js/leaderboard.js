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
        
        content = `${content}<tr id='${i + 1}'><td>${response[i].Username}</td>
        <td>${response[i].Score}</td>
        <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}'>Update</a></td></tr>`;

      }
      $("#Leaderboard-list tbody").html(content);
    });
}

// function getScores(limit = 10, all = true){

//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://quizwebsiteasg2-c11c.restdb.io/rest/leaderboard",
//         "method": "GET",
//         "headers": {
//             "content-type": "application/json",
//             "x-apikey": APIKEY,
//             "cache-control": "no-cache"
//         }
//     }

//     $.ajax(settings).done(function (response) {
//     console.log(response);

//     let content = "";

//     for (var i = 0; i < response.length && i < limit; i++){
        
//         }
//     })
// }