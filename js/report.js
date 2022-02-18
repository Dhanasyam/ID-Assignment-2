$(document).ready(function () {
  const APIKEY = "d2d02cc0510d5401d5ef408bdcb358168c7bf";
    // $("#update-contact-container").hide();
  $("#success-msg col-12").hide();
  
    
  $("#feedback-submit").on("click", function (e) {
       
    e.preventDefault();
  
    let Name = $("#feed-name").val();
    let Email = $("#feed-email").val();
    let Report = $("#feed-msg").val();

    let jsondata = {
      "Name": Name,
      "Report": Report,
      "Email": Email
    };

    console.log(jsondata);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://quizwebsiteasg2-c11c.restdb.io/rest/reports",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "620f118234fd62156585877b",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

  })
})
